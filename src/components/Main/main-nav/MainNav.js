import NavLogo from './nav-logo/NavLogo';
import NavBurger from './nav-burger/NavBurger';
import NavMenu from './nav-menu/NavMenu';

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
