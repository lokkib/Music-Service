import { useState } from 'react';
import { useContext } from 'react';

import ThemeContext, { themes } from '../../../../../../../themes';
import { NightThemeIcon } from '../../../../../../main/components/Main/MainNav/NavMenu/ThemeIcons/NightThemeIcon';
import { SunThemeIcon } from '../../../../../../main/components/Main/MainNav/NavMenu/ThemeIcons/SunThemeIcon';
import MenuItem from './MenuList/MenuItem';
import { StyledNavMenu } from './StyledNavMenu';

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

    return (
        <StyledNavMenu>
            <MenuItem content="Главное" />
            <MenuItem content="Мой плейлист" />
            <MenuItem content="Войти" />
            {!theme ? (
                <NightThemeIcon changeThemeIcon={changeThemeIcon} />
            ) : (
                <SunThemeIcon changeThemeIcon={changeThemeIcon} />
            )}
        </StyledNavMenu>
    );
}

export default NavMenu;
