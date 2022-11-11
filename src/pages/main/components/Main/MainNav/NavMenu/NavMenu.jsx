import { useState } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ThemeContext, { themes } from '../../../../../../themes';
import MenuItem from './MenuList/MenuItem';
import { StyledNavMenu } from './StyledNavMenu';
import { NightThemeIcon } from './ThemeIcons/NightThemeIcon';
import { SunThemeIcon } from './ThemeIcons/SunThemeIcon';


function NavMenu() {
    const [theme, setTheme] = useState(false);
    const navigate = useNavigate()

    const { themeMode, setThemeMode } = useContext(ThemeContext);


    function changeThemeIcon() {
        setTheme(!theme);

        setThemeMode(
            themeMode === themes.darkTheme
                ? themes.lightTheme
                : themes.darkTheme
        );
    }

    function signOut() {
        navigate('/')
    }

    return (
        <StyledNavMenu>
            <MenuItem content="Главное" />
            <MenuItem content="Мой плейлист" />
            <MenuItem signOut={signOut} content="Выйти" />
            {!theme ? (
                <NightThemeIcon changeThemeIcon={changeThemeIcon} />
            ) : (
                <SunThemeIcon changeThemeIcon={changeThemeIcon} />
            )}
        </StyledNavMenu>
    );
}

export default NavMenu;
