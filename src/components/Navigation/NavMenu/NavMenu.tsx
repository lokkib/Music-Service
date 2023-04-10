import { useState, useContext } from 'react';

import { useDispatch } from 'react-redux';
import ThemeContext, { themes } from '../../../themes';
import MenuItem from './MenuList/MenuItem';
import { StyledNavMenu } from './StyledNavMenu';
import { NightThemeIcon } from './ThemeIcons/NightThemeIcon';
import { SunThemeIcon } from './ThemeIcons/SunTemeIcon';
import { setPlay2 } from '../../../redux/slices/playTrackSlice';

const NavMenu = () => {
    const [darkTheme, setTheme] = useState(true);

    const { themeMode, setThemeMode, setVisibility } = useContext(ThemeContext);
    const dispatch = useDispatch();
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
        setVisibility(themes.barVisibility.hidden);
        dispatch(setPlay2(false));
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
