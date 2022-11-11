import { useState } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ThemeContext, { themes } from '../../../../../../../themes';
import { NightThemeIcon } from '../../../../../../main/components/Main/MainNav/NavMenu/ThemeIcons/NightThemeIcon';
import { SunThemeIcon } from '../../../../../../main/components/Main/MainNav/NavMenu/ThemeIcons/SunThemeIcon';
import MenuItem from './MenuList/MenuItem';
import { StyledNavMenu } from './StyledNavMenu';

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

    function goBackToMainPage() {
        navigate(-1)
    }

    return (
        <StyledNavMenu>
            <MenuItem goBackToMainPage={goBackToMainPage} content="Главное" />
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
