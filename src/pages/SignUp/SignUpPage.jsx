import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { SecondButtonSignUp } from '../../components/Button/ButtonSignUp';
import { Input } from '../../components/Input/Input';
import Logo from '../../components/Logo/Logo';
import { useSignupMutation } from '../../redux/AuthorizationGetTracks/tracksApi';
import StyledBlock from '../SignIn/Styledblock';

const SignUpPage = () => {
    const [placeholderLogin, setPlaceholderLogin] = useState('Логин');
    const [placeholderMail, setPlaceholderMail] = useState('Почта');
    const [placeholderPassword, setPlaceholderPassword] = useState('Пароль');
    const [placeholderPasswordRepeat, setPlaceholderPasswordRepeat] =
        useState('Повторите пароль');

    const [username, setLogin] = useState('');
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const navigate = useNavigate();

    const [signUp] = useSignupMutation();

    const handleSignUp = async () => {
        await signUp({
            username,
            password,
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

    const clearInput = (v) => {
        const str = 'Это поле не может быть пустым.';
        if (v === str) {
            setLogin('');
            setPassword('');
            setMail('');
            setPasswordRepeat('');
            return true;
        }
    };

    return (
        <StyledBlock>
            <Logo />
            <Input
                onFocus={() => setPlaceholderLogin('')}
                placeholder={placeholderLogin}
                onChange={(e) => setLogin(e.target.value)}
                value={username}
                onClick={() => clearInput(username)}
                onBlur={() => setPlaceholderLogin('Логин')}
            />
            <Input
                placeholder={placeholderMail}
                onChange={(e) => setMail(e.target.value)}
                value={mail}
                onClick={() => clearInput(mail)}
                onFocus={() => setPlaceholderMail('')}
                onBlur={() => setPlaceholderMail('Почта')}
            />
            <Input
                placeholder={placeholderPassword}
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                onClick={() => clearInput(password)}
                onFocus={() => setPlaceholderPassword('')}
                onBlur={() => setPlaceholderPassword('Пароль')}
            />
            <Input
                placeholder={placeholderPasswordRepeat}
                onChange={(e) => setPasswordRepeat(e.target.value)}
                value={passwordRepeat}
                onClick={() => clearInput(passwordRepeat)}
                onFocus={() => setPlaceholderPasswordRepeat('')}
                onBlur={() => setPlaceholderPasswordRepeat('Повторите пароль')}
            />
            <SecondButtonSignUp onClick={handleSignUp}>
                Зарегистрироваться
            </SecondButtonSignUp>
        </StyledBlock>
    );
};

export default SignUpPage;
