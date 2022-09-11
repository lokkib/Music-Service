import NavLogo from './NavLogo/NavLogo';
import NavBurger from './NavBurger/NavBurger';
import NavMenu from './NavMenu/NavMenu';

import { useState, useEffect } from 'react';
import { StyledMainNav } from './StyledMainNav';

function MainNav() {
    const [menu, setMenu] = useState(false);


    // useEffect(() => {
    //     document
    //         .querySelector('.nav__burger')
    //         .addEventListener('click', function () {
    //             setMenu(!menu);
    //         });
    // });

    let elem;

    if (menu) {
        elem = <NavMenu />;
    }

    return (
        <StyledMainNav>
            <NavLogo />
            <NavBurger />
            {elem}
            {/* <NavMenu /> */}
        </StyledMainNav>
        
    );
}

export default MainNav;
