import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { SecondButtonSignUp } from '../../components/Button/ButtonSignUp';
import { Input } from '../../components/Input/Input';
import Logo from '../../components/Logo/Logo';
import { useSignupMutation } from '../../redux/api/tracksApi';
import StyledBlock from '../SignIn/Styledblock';
import { StyledErrorMessage } from '../../components/ErrorMessage/StyledErrorMessage';

const SignupSchema = Yup.object().shape({
    login: Yup.string()
        .min(2, 'Слишком короткий логин')
        .required('Поле обязательно для заполнения'),
    mail: Yup.string()
        .min(6, 'Введите правильный адрес электронной почты.')
        .required('Поле обязательно для заполнения'),
    password: Yup.string()
        .min(8, 'Пароль должен содержать минимум 8 символов')
        .required('Поле обязательно для заполнения'),
    repeatPassword: Yup.string()
        .min(8, 'Пароль должен содержать минимум 8 символов')
        .required('Поле обязательно для заполнения'),
});

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
                throw new Error();
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
            <StyledBlock height="540px">
                <div
                    style={{
                        position: 'absolute',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Logo />
                    <Formik
                        initialValues={{
                            login: '',
                            mail: '',
                            password: '',
                            repeatPassword: '',
                        }}
                        validationSchema={SignupSchema}
                        onSubmit={handleSignUp}
                    >
                        {({ handleChange, errors, touched }) => (
                            <Form>
                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Input
                                        name="login"
                                        onFocus={() => setPlaceholderLogin('')}
                                        placeholder={placeholderLogin}
                                        onChange={(e) => [
                                            setLogin(e.target.value),
                                            handleChange(e),
                                        ]}
                                        value={username}
                                        onClick={() => clearInput(username)}
                                        onBlur={() =>
                                            setPlaceholderLogin('Логин')
                                        }
                                    />
                                    <StyledErrorMessage>
                                        {errors.login &&
                                            touched.login &&
                                            errors.login}
                                    </StyledErrorMessage>
                                    <Input
                                        name="mail"
                                        placeholder={placeholderMail}
                                        onChange={(e) => [
                                            setMail(e.target.value),
                                            handleChange(e),
                                        ]}
                                        value={mail}
                                        onClick={() => clearInput(mail)}
                                        onFocus={() => setPlaceholderMail('')}
                                        onBlur={() =>
                                            setPlaceholderMail('Почта')
                                        }
                                    />
                                    <StyledErrorMessage>
                                        {errors.mail &&
                                            touched.mail &&
                                            errors.mail}
                                    </StyledErrorMessage>
                                    <Input
                                        name="password"
                                        placeholder={placeholderPassword}
                                        onChange={(e) => [
                                            setPassword(e.target.value),
                                            handleChange(e),
                                        ]}
                                        value={password}
                                        onClick={() => clearInput(password)}
                                        onFocus={() =>
                                            setPlaceholderPassword('')
                                        }
                                        onBlur={() =>
                                            setPlaceholderPassword('Пароль')
                                        }
                                    />
                                    <StyledErrorMessage>
                                        {errors.password &&
                                            touched.password &&
                                            errors.password}
                                    </StyledErrorMessage>
                                    <Input
                                        name="repeatPassword"
                                        placeholder={placeholderPasswordRepeat}
                                        onChange={(e) => [
                                            setPasswordRepeat(e.target.value),
                                            handleChange(e),
                                        ]}
                                        value={passwordRepeat}
                                        onClick={() =>
                                            clearInput(passwordRepeat)
                                        }
                                        onFocus={() =>
                                            setPlaceholderPasswordRepeat('')
                                        }
                                        onBlur={() =>
                                            setPlaceholderPasswordRepeat(
                                                'Повторите пароль'
                                            )
                                        }
                                    />
                                    <StyledErrorMessage>
                                        {errors.repeatPassword &&
                                            touched.repeatPassword &&
                                            errors.repeatPassword}
                                    </StyledErrorMessage>
                                    <SecondButtonSignUp
                                        onKeyDown={(e) =>
                                            e.key === 'Enter' && handleSignUp
                                        }
                                        onClick={handleSignUp}
                                    >
                                        Зарегистрироваться
                                    </SecondButtonSignUp>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </StyledBlock>
        </motion.div>
    );
};

export default SignUpPage;
