import MenuItem from './MenuList/MenuItem';
import { useState } from 'react';
import { StyledNavMenu } from './StyledNavMenu';
import { useContext } from 'react';
import ThemeContext, { themes } from '../../../../../../../themes';

function NavMenu() {
    const [theme, setTheme] = useState(false);

    const { themeMode, setThemeMode } = useContext(ThemeContext);

    function changeThemeIcon() {
        setTheme(!theme);
        setThemeMode(
            themeMode === themes.darkTheme
                ? themes.lightTheme
                : themes.darkTheme
        );
    }

    let element;

    if (!theme) {
        element = '../img/night-theme.png';
    }

    if (theme) {
        element = '../img/sun-theme.png';
    }

    return (
        <StyledNavMenu>
            <MenuItem content="Главное" />
            <MenuItem content="Мой плейлист" />
            <MenuItem content="Войти" />
            <img
                style={{ cursor: 'pointer' }}
                onClick={changeThemeIcon}
                src={element}
            ></img>
        </StyledNavMenu>
    );
}

export default NavMenu;
