import { StyledNavLogo } from './StyledNavLogo';
import ThemeContext, { themes } from '../../../../../../themes';
import { useContext } from 'react';


function NavLogo() {
    const {theme2} = useContext(ThemeContext);


    let elem;

    if(theme2 === themes.dark) {
        elem = '../img/logo.png'
    }
    else{
        elem = '../img/logo2.png'
    }

    return (
        <StyledNavLogo>
            <img style={theme2} className="logo__image" src={elem} alt="logo"></img>
        </StyledNavLogo>
    );
}

export default NavLogo;
