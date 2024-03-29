import { useState, useContext } from 'react';

import NavMenu from './NavMenu/NavMenu';
import ThemeContext from '../../themes';
import NavBurger from './NavBurger/NavBurger';
import NavLogoContainer from './NavLogoContainer/NavLogoContainer';
import { StyledNavigation } from './StyledNavigation';

const Navigation = () => {
    const [menu, setMenu] = useState(false);

    const { themeMode } = useContext(ThemeContext);

    const showMenuOnClick = () => {
        setMenu(!menu);
    };

    let elem;

    if (menu) {
        elem = <NavMenu />;
    }

    return (
        <StyledNavigation style={themeMode.main}>
            <NavLogoContainer />
            <NavBurger showMenuOnClick={showMenuOnClick} />
            {elem}
        </StyledNavigation>
    );
};

export default Navigation;
