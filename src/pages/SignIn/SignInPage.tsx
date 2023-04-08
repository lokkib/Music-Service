import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { ButtonSignIn } from '../../components/Button/ButtonSignIn';
import { ButtonSignUp } from '../../components/Button/ButtonSignUp';
import { Input } from '../../components/Input/Input';
import Logo from '../../components/Logo/Logo';
import { useLoginMutation, useTokenMutation } from '../../redux/api/tracksApi';
import StyledBlock from './Styledblock';
import { StyledErrorMessage } from '../../components/ErrorMessage/StyledErrorMessage';

const SignupSchema = Yup.object().shape({
    mail: Yup.string()
        .min(6, 'Слишком короткий адрес')
        .email('Введите валидный адрес электронной почты')
        .required('Поле обязательно для заполнения'),
    password: Yup.string()
        .min(8, 'Пароль должен содержать минимум 8 символов')
        .required('Поле обязательно для заполнения'),
});

const SignInPage = () => {
    const [email, setMail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [placeholderMail, setPlaceholderMail] = useState<string>('Почта');
    const [placeholderPassword, setPlaceholderPassword] =
        useState<string>('Пароль');

    const [errorUserNotFound, setErrorUserNotFound] = useState<boolean>(false);

    const [, setCookie] = useCookies();

    const navigate = useNavigate();
    const [loginIn] = useLoginMutation();
    const [gettingToken] = useTokenMutation();

    useEffect(() => {
        const timer = setTimeout(() => {
            setErrorUserNotFound(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, [errorUserNotFound]);

    const handleLogin = async () => {
        await loginIn({
            email,
            password,
        })
            .unwrap()
            .catch((error) => {
                if (
                    error.data.detail ===
                    'Пользователь с таким email или паролем не найден'
                ) {
                    setErrorUserNotFound(true);
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
                sessionStorage.setItem('Auth', 'true');
            });
        navigate('/main');
    };

    const handleClick2 = () => {
        navigate('/signup');
    };

    const clearInput = (v: string) => {
        const str = 'Это поле не может быть пустым.';
        if (v === str) {
            setPassword('');
            setMail('');

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
                <AnimatePresence>
                    {errorUserNotFound && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <StyledErrorMessage fontSize="14px">
                                Пользователь с таким email или паролем не найден
                            </StyledErrorMessage>
                            ;
                        </motion.div>
                    )}
                </AnimatePresence>
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
                            mail: '',
                            password: '',
                        }}
                        validationSchema={SignupSchema}
                        onSubmit={handleLogin}
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
                                        name="mail"
                                        onClick={() => clearInput(email)}
                                        onChange={(e) => [
                                            setMail(
                                                e.target.value
                                                    .trim()
                                                    .replace(/[А-Яа-яЁё]/, '')
                                            ),
                                            handleChange(e),
                                        ]}
                                        value={email}
                                        onFocus={() => setPlaceholderMail('')}
                                        placeholder={placeholderMail}
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
                                        onClick={() => clearInput(password)}
                                        onChange={(e) => [
                                            setPassword(
                                                e.target.value
                                                    .trim()
                                                    .replace(/[А-Яа-яЁё]/, '')
                                            ),
                                            handleChange(e),
                                        ]}
                                        onKeyDown={(e) =>
                                            e.key === 'Enter' && handleLogin()
                                        }
                                        value={password}
                                        onFocus={() =>
                                            setPlaceholderPassword('')
                                        }
                                        placeholder={placeholderPassword}
                                        onBlur={() =>
                                            setPlaceholderPassword('Пароль')
                                        }
                                    />
                                    <StyledErrorMessage>
                                        {errors.password &&
                                            touched.password &&
                                            errors.password}
                                    </StyledErrorMessage>
                                    <ButtonSignIn onClick={handleLogin}>
                                        Войти
                                    </ButtonSignIn>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>

                <ButtonSignUp onClick={handleClick2}>
                    Зарегистрироваться
                </ButtonSignUp>
            </StyledBlock>
        </motion.div>
    );
};

export default SignInPage;
