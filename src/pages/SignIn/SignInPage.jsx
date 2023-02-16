import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

import { ButtonSignIn } from '../../components/Button/ButtonSignIn';
import { ButtonSignUp } from '../../components/Button/ButtonSignUp';
import { Input } from '../../components/Input/Input';
import Logo from '../../components/Logo/Logo';
import {
    useLoginMutation,
    useTokenMutation,
} from '../../redux/AuthorizationGetTracks/tracksApi';
import StyledBlock from './Styledblock';

const SignInPage = () => {
    const [email, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [placeholderMail, setPlaceholderMail] = useState('Почта');
    const [placeholderPassword, setPlaceholderPassword] = useState('Пароль');
    const [, setCookie] = useCookies();

    const navigate = useNavigate();
    const [loginIn] = useLoginMutation();
    const [gettingToken] = useTokenMutation();

    const handleLogin = async () => {
        await loginIn({
            email,
            password,
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
            email,
            password,
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
        const str = 'Это поле не может быть пустым.';
        if (v === str) {
            setPassword('');
            setMail('');

            return true;
        }
    }

    return (
        <StyledBlock>
            <Logo />
            <Input
                onClick={() => clearInput(email)}
                onChange={(e) => setMail(e.target.value)}
                value={email}
                onFocus={() => setPlaceholderMail('')}
                placeholder={placeholderMail}
                onBlur={() => setPlaceholderMail('Почта')}
            />
            <Input
                onClick={() => clearInput(password)}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
                value={password}
                onFocus={() => setPlaceholderPassword('')}
                placeholder={placeholderPassword}
                onBlur={() => setPlaceholderPassword('Пароль')}
            />
            <ButtonSignIn onClick={handleLogin}>Войти</ButtonSignIn>
            <ButtonSignUp onClick={handleClick2}>
                Зарегистрироваться
            </ButtonSignUp>
        </StyledBlock>
    );
};

export default SignInPage;
