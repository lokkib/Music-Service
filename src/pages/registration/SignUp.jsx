import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useSignupMutation } from '../../redux/AuthorizationGetTracks/tracksApi';
import StyledBlock from '../login/Styledblock';
import { SecondButtonSignUp } from '../login/StyledButtons';
import Img from '../login/StyledImg';
import * as S from '../login/StyledInputs';

const SignUp = () => {
    const [username, setLogin] = useState('');
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const navigate = useNavigate();

    const [signUp] = useSignupMutation();

    const handleSignUp = async () => {
        await signUp({
            username: username,
            password: password,
            email: mail,
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
                if (error.data.username) {
                    setLogin(error.data.username[0]);
                } else {
                    setLogin('');
                }
            })
            .then((response) => {
                if (response) {
                    navigate('/');
                }
            });
    };

    function clearInput(v) {
        let str = 'Это поле не может быть пустым.';
        if (v === str) {
            setLogin('');
            setPassword('');
            setMail('');
            setPasswordRepeat('');
            return true;
        } else {
            return;
        }
    }

    return (
        <StyledBlock>
            <Img />
            <S.Input
                placeholder="Логин"
                onChange={(e) => setLogin(e.target.value)}
                value={username}
                onClick={() => clearInput(username)}
            />
            <S.Input
                placeholder="Почта"
                onChange={(e) => setMail(e.target.value)}
                value={mail}
                onClick={() => clearInput(mail)}
            />
            <S.Input
                placeholder="Пароль"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                onClick={() => clearInput(password)}
            />
            <S.Input
                placeholder="Повторите пароль"
                onChange={(e) => setPasswordRepeat(e.target.value)}
                value={passwordRepeat}
                onClick={() => clearInput(passwordRepeat)}
            />
            <SecondButtonSignUp onClick={handleSignUp}>
                Зарегистрироваться
            </SecondButtonSignUp>
        </StyledBlock>
    );
};

export default SignUp;
