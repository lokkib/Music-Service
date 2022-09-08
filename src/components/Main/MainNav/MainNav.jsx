import NavLogo from './NavLogo/NavLogo';
import NavBurger from './NavBurger/NavBurger';
import NavMenu from './NavMenu/NavMenu';
import './MainNav.scss';
import { useState, useEffect } from 'react';

function MainNav() {
    const [menu, setMenu] = useState(false);

    useEffect(() => {
        document
            .querySelector('.nav__burger')
            .addEventListener('click', function () {
                setMenu(!menu);
            });
    });

    let elem;

    if (menu) {
        elem = <NavMenu />;
    }

    return (
        <nav className="main__nav nav">
            <NavLogo />
            <NavBurger />
            {elem}
        </nav>
    );
}

export default MainNav;
