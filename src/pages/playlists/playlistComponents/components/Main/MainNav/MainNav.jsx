import NavLogo from './NavLogo/NavLogo';
import NavBurger from './NavBurger/NavBurger';
import NavMenu from './NavMenu/NavMenu';

import { useState } from 'react';
import { StyledMainNav } from './StyledMainNav';
import { useContext } from 'react';
import ThemeContext from '../../../../../../themes';

function MainNav() {
    const [menu, setMenu] = useState(false);

    const { themeMode } = useContext(ThemeContext);

    function onClick() {
        setMenu(!menu);
    }

    let elem;

    if (menu) {
        elem = <NavMenu />;
    }

    return (
        <StyledMainNav style={themeMode.main}>
            <NavLogo />
            <NavBurger handleClick={onClick} />
            {elem}
        </StyledMainNav>
    );
}

export default MainNav;
