import * as S from './StyledInputs';
import * as Styled from './StyledButtons';
import StyledBlock from './Styledblock';
import { useNavigate } from 'react-router-dom';
import Img from './StyledImg';

const SignIn = () => {
    const navigate = useNavigate();

    function handleClick() {
        navigate('/main');
    }

    function handleClick2() {
        navigate('/signup');
    }

    return (
        <StyledBlock>
            <Img />
            <S.Input placeholder="Логин" />
            <S.Input placeholder="Пароль" />
            <Styled.ButtonSignIn onClick={handleClick}>
                Войти
            </Styled.ButtonSignIn>
            <Styled.ButtonSignUp onClick={handleClick2}>
                Зарегистрироваться
            </Styled.ButtonSignUp>
        </StyledBlock>
    );
};

export default SignIn;
