import { useState } from 'react';

import NavMenu from '../../../../main/components/Main/MainNav/NavMenu/NavMenu';
import NavBurger from './NavBurger/NavBurger';
import NavLogo from './NavLogo/NavLogo';
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
