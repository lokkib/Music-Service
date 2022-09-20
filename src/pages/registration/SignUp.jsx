import * as S from '../login/StyledInputs';
import StyledBlock from '../login/Styledblock';
import { SecondButtonSignUp } from '../login/StyledButtons';
import Img from '../login/StyledImg';

const SignUp = () => {
    return (
        <StyledBlock>
            <Img />
            <S.Input value="Логин" />
            <S.Input value="Пароль" />
            <S.Input value="Повторите пароль" />
            <SecondButtonSignUp>Зарегистрироваться</SecondButtonSignUp>
        </StyledBlock>
    );
};

export default SignUp;
