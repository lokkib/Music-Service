import NavLogo from './NavLogo/NavLogo';
import NavBurger from './NavBurger/NavBurger';
import NavMenu from './NavMenu/NavMenu';
import './MainNav.scss';

function MainNav() {
    return (
        <nav className="main__nav nav">
            <NavLogo />
            <NavBurger />
            <NavMenu />
        </nav>
    );
}

export default MainNav;
