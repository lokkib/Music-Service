import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

import { useLoginMutation } from '../../redux/AuthorizationGetTracks/tracksApi';
import { useTokenMutation } from '../../redux/AuthorizationGetTracks/tracksApi';
import StyledBlock from './Styledblock';
import * as Styled from './StyledButtons';
import Img from './StyledImg';
import * as S from './StyledInputs';

const SignIn = () => {
    const [email, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [, setCookie] = useCookies();

    const navigate = useNavigate();
    const [loginIn] = useLoginMutation();
    const [gettingToken] = useTokenMutation();

    const handleLogin = async () => {
        await loginIn({
            email: email,
            password: password,
        })
            .unwrap()
            .catch((error) => {
                if (error.data.email) {
                    setMail(error.data.email[0]);
                } else {
                    setMail('');
                }
                if (error.data.password) {
                    setPassword(error.data.password[0]);
                } else {
                    setPassword('');
                }
            });

        await gettingToken({
            email: email,
            password: password,
        })
            .unwrap()
            .then((token) => {
                setCookie('access', token.access);
                setCookie('refresh', token.refresh);
            });
        navigate('/main');
    };

    function handleClick2() {
        navigate('/signup');
    }

    function clearInput(v) {
        let str = 'Это поле не может быть пустым.';
        if (v === str) {
            setPassword('');
            setMail('');

            return true;
        } else {
            return;
        }
    }

    return (
        <StyledBlock>
            <Img />
            <S.Input
                onClick={() => clearInput(email)}
                onChange={(e) => setMail(e.target.value)}
                value={email}
                placeholder="Почта"
            />
            <S.Input
                onClick={() => clearInput(password)}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
                value={password}
                placeholder="Пароль"
            />
            <Styled.ButtonSignIn onClick={handleLogin}>
                Войти
            </Styled.ButtonSignIn>
            <Styled.ButtonSignUp onClick={handleClick2}>
                Зарегистрироваться
            </Styled.ButtonSignUp>
        </StyledBlock>
    );
};

export default SignIn;
