import { useState, useContext } from 'react';
import { useDispatch } from 'react-redux';

import { changeTheme } from '../../redux/lightDarkTheme/lightDarkThemeSlice';
import ThemeContext, { themes } from '../../themes';
import MenuItem from './MenuList/MenuItem';
import { StyledNavMenu } from './StyledNavMenu';
import { NightThemeIcon } from './ThemeIcons/NightThemeIcon';
import { SunThemeIcon } from './ThemeIcons/SunTemeIcon';

const NavMenu = () => {
    const [theme, setTheme] = useState(false);
    const dispatch = useDispatch();

    const { themeMode, setThemeMode } = useContext(ThemeContext);

    const changeThemeIcon = () => {
        setTheme(!theme);
        dispatch(changeTheme(theme));
        setThemeMode(
            themeMode === themes.darkTheme
                ? themes.lightTheme
                : themes.darkTheme
        );
    };

    return (
        <StyledNavMenu>
            <MenuItem navigation="/main" content="Главное" />
            <MenuItem navigation="/mytracks" content="Мой плейлист" />
            <MenuItem navigation="/" content="Выйти" />
            {!theme ? (
                <NightThemeIcon changeThemeIcon={changeThemeIcon} />
            ) : (
                <SunThemeIcon changeThemeIcon={changeThemeIcon} />
            )}
        </StyledNavMenu>
    );
};

export default NavMenu;
