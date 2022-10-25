import BurgerLine from './BurgerLine/BurgerLine';
import { StyledNavBurger } from './StyledNavBurger';

function NavBurger({ handleClick }) {
    return (
        <StyledNavBurger onClick={handleClick}>
            <BurgerLine />
            <BurgerLine />
            <BurgerLine />
        </StyledNavBurger>
    );
}

export default NavBurger;
