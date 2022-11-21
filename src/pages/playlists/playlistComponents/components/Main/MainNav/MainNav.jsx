import { useState } from 'react';
import { useContext } from 'react';

import ThemeContext from '../../../../../../themes';
import NavMenu from '../../../../../main/components/Main/MainNav/NavMenu/NavMenu';
import NavBurger from './NavBurger/NavBurger';
import NavLogo from './NavLogo/NavLogo';
import { StyledMainNav } from './StyledMainNav';

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
