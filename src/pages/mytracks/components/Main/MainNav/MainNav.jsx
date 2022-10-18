import { useState } from 'react';

import NavBurger from './NavBurger/NavBurger';
import NavLogo from './NavLogo/NavLogo';
import NavMenu from './NavMenu/NavMenu';
import { StyledMainNav } from './StyledMainNav';

function MainNav() {
    const [menu, setMenu] = useState(false);

    function onClick() {
        setMenu(!menu);
    }

    let elem;

    if (menu) {
        elem = <NavMenu />;
    }

    return (
        <StyledMainNav>
            <NavLogo />
            <NavBurger handleClick={onClick} />
            {elem}
        </StyledMainNav>
    );
}

export default MainNav;
