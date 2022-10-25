import { useNavigate } from 'react-router-dom';

import StyledBlock from './Styledblock';
import * as Styled from './StyledButtons';
import Img from './StyledImg';
import * as S from './StyledInputs';

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
