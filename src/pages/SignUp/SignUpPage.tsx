import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SecondButtonSignUp } from '../../components/Button/ButtonSignUp';
import { Input } from '../../components/Input/Input';
import Logo from '../../components/Logo/Logo';
import { useSignupMutation } from '../../redux/api/tracksApi';
import StyledBlock from '../SignIn/Styledblock';

const SignUpPage = () => {
    const [placeholderLogin, setPlaceholderLogin] = useState<string>('Логин');
    const [placeholderMail, setPlaceholderMail] = useState<string>('Почта');
    const [placeholderPassword, setPlaceholderPassword] =
        useState<string>('Пароль');
    const [placeholderPasswordRepeat, setPlaceholderPasswordRepeat] =
        useState<string>('Повторите пароль');

    const [username, setLogin] = useState<string>('');
    const [mail, setMail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordRepeat, setPasswordRepeat] = useState<string>('');
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
                    sessionStorage.setItem('Auth', 'true');
                    navigate('/');
                }
            });
    };

    const clearInput = (v: string) => {
        const str = 'Это поле не может быть пустым.';
        if (v === str) {
            setLogin('');
            setPassword('');
            setMail('');
            setPasswordRepeat('');
            return true;
        }

        return false;
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
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
                    onBlur={() =>
                        setPlaceholderPasswordRepeat('Повторите пароль')
                    }
                />
                <SecondButtonSignUp
                    onKeyDown={(e) => e.key === 'Enter' && handleSignUp}
                    onClick={handleSignUp}
                >
                    Зарегистрироваться
                </SecondButtonSignUp>
            </StyledBlock>
        </motion.div>
    );
};

export default SignUpPage;
