import BurgerLine from './BurgerLine/BurgerLine';

import { StyledNavBurger } from './StyledNavBurger';

function NavBurger() {
    return (
        <StyledNavBurger>
            <BurgerLine />
            <BurgerLine />
            <BurgerLine />
        </StyledNavBurger>
    );
}

export default NavBurger;
