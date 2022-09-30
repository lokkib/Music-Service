import MenuItem from './MenuList/MenuItem';
import { useState } from 'react';
import { StyledNavMenu } from './StyledNavMenu';
import { useContext } from 'react';
import ThemeContext,{themes} from '../../../../../../../themes';

function NavMenu() {
    const [theme, setTheme] = useState(false);

    const {theme2, setTheme2,theme3, setTheme3, theme4, setTheme4, theme5, setTheme5, theme6, setTheme6, theme7, setTheme7, theme8, setTheme8, theme9, setTheme9, theme10, setTheme10} = useContext(ThemeContext);

    function changeThemeIcon() {
        setTheme(!theme);

        setTheme2(theme2 === themes.dark ? themes.light : themes.dark);
        
        setTheme3(theme3 === themes.darkProgress ? themes.lightProgress: themes.darkProgress);

        setTheme4(theme4 === themes.darkBorder ? themes.lightBorder: themes.darkBorder);

        setTheme5(theme5 === themes.darkBurgerLine ? themes.lightBurgerLine: themes.darkBurgerLine);
       
        setTheme6(theme6 === themes.darkTrackTitle ? themes.lightTrackTitle: themes.darkTrackTitle);

        setTheme7(theme7 === themes.darkTrackIconsFill ? themes.lightTrackIconsFill: themes.darkTrackIconsFill);

        setTheme8(theme8 === themes.darkTrackIconsStroke ? themes.lightTrackIconsStroke: themes.darkTrackIconsStroke);

        setTheme9(theme9 === themes.darkTrackIconsFill2 ? themes.lightTrackIconsFill2: themes.darkTrackIconsFill2);

        setTheme10(theme10 === themes.darkTrackIconsStroke2 ? themes.lightTrackIconsStroke2: themes.darkTrackIconsStroke2);
    
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
            <img style={{cursor:'pointer'}} onClick={changeThemeIcon} src={element}></img>
        </StyledNavMenu>
    );
}

export default NavMenu;
