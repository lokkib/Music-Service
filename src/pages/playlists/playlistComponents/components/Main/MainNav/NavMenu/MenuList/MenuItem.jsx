import { useContext } from 'react';

import ThemeContext from '../../../../../../../../themes';
import { StyledMenuItem } from '../../../../../../../main/components/Main/MainNav/NavMenu/MenuList/MenuListComponents/StyledMenuItem';
import { StyledMenuLink } from '../../../../../../../main/components/Main/MainNav/NavMenu/MenuList/MenuListComponents/StyledMenuLink';

function MenuItem({ content, signOut, goBackToMainPage }) {
    const { themeMode } = useContext(ThemeContext);
    return (
        <StyledMenuItem>
            <StyledMenuLink
                goBackToMainPage={goBackToMainPage}
                signOut={signOut}
                style={themeMode.main}
            >
                {content}
            </StyledMenuLink>
        </StyledMenuItem>
    );
}

export default MenuItem;
