import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
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
        .required('Поле обязательно для заполнения')
        .min(2, 'Слишком короткий логин'),
    mail: Yup.string()
        .required('Поле обязательно для заполнения')
        .min(6, 'Адрес электронной почты слишком короткий')
        .email('Введите валидный адрес электронной почты'),
    password: Yup.string()
        .min(8, 'Пароль должен содержать минимум 8 символов')
        .required('Поле обязательно для заполнения'),
    repeatPassword: Yup.string()
        .required('Поле обязательно для заполнения')
        .min(8, 'Пароль должен содержать минимум 8 символов')
        .oneOf([Yup.ref('password')], 'Пароли должны совпадать'),
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
    const [userExists, setUserExists] = useState<boolean>(false);
    const navigate = useNavigate();

    const [signUp] = useSignupMutation();

    useEffect(() => {
        const timer = setTimeout(() => {
            setUserExists(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, [userExists]);

    const handleSignUp = async () => {
        await signUp({
            username,
            password,
            email: mail,
        })
            .unwrap()
            .catch((error) => {
                if (
                    error.data.username[0] ===
                    'Пользователь с таким именем уже существует.'
                ) {
                    setUserExists(true);
                }
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
        <StyledBlock height="540px">
            <AnimatePresence>
                {userExists && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <StyledErrorMessage fontSize="14px">
                            Пользователь с таким именем уже существует
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
                                        setLogin(
                                            e.target.value
                                                .trim()
                                                .replace(/[А-Яа-яЁё]/, '')
                                        ),
                                        handleChange(e),
                                    ]}
                                    value={username}
                                    onClick={() => clearInput(username)}
                                    onBlur={() => setPlaceholderLogin('Логин')}
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
                                        setMail(
                                            e.target.value
                                                .trim()
                                                .replace(/[А-Яа-яЁё]/, '')
                                        ),
                                        handleChange(e),
                                    ]}
                                    value={mail}
                                    onClick={() => clearInput(mail)}
                                    onFocus={() => setPlaceholderMail('')}
                                    onBlur={() => setPlaceholderMail('Почта')}
                                />
                                <StyledErrorMessage>
                                    {errors.mail && touched.mail && errors.mail}
                                </StyledErrorMessage>
                                <Input
                                    name="password"
                                    placeholder={placeholderPassword}
                                    onChange={(e) => [
                                        setPassword(
                                            e.target.value
                                                .trim()
                                                .replace(/[А-Яа-яЁё]/, '')
                                        ),
                                        handleChange(e),
                                    ]}
                                    value={password}
                                    onClick={() => clearInput(password)}
                                    onFocus={() => setPlaceholderPassword('')}
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
                                        setPasswordRepeat(
                                            e.target.value
                                                .trim()
                                                .replace(/[А-Яа-яЁё]/, '')
                                        ),
                                        handleChange(e),
                                    ]}
                                    value={passwordRepeat}
                                    onClick={() => clearInput(passwordRepeat)}
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
    );
};

export default SignUpPage;
