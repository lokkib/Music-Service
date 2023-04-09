import { useState, useContext } from 'react';

import ThemeContext, { themes } from '../../../themes';
import MenuItem from './MenuList/MenuItem';
import { StyledNavMenu } from './StyledNavMenu';
import { NightThemeIcon } from './ThemeIcons/NightThemeIcon';
import { SunThemeIcon } from './ThemeIcons/SunTemeIcon';

const NavMenu = () => {
    const [darkTheme, setTheme] = useState(true);

    const { themeMode, setThemeMode } = useContext(ThemeContext);

    const changeThemeIcon = () => {
        setTheme(!darkTheme);

        setThemeMode(
            themeMode === themes.darkTheme
                ? themes.lightTheme
                : themes.darkTheme
        );
    };

    const logOut = () => {
        sessionStorage.removeItem('Auth');
    };

    return (
        <StyledNavMenu>
            <MenuItem navigation="/main" content="Главное" />
            <MenuItem navigation="/mytracks" content="Мой плейлист" />
            <MenuItem onClick={logOut} navigation="/" content="Выйти" />
            <div
                onKeyDown={changeThemeIcon}
                tabIndex={0}
                role="button"
                onClick={changeThemeIcon}
            >
                {themeMode === themes.darkTheme ? (
                    <NightThemeIcon />
                ) : (
                    <SunThemeIcon />
                )}
            </div>
        </StyledNavMenu>
    );
};

export default NavMenu;
