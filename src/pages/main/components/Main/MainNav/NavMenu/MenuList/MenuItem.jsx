import { useContext } from 'react';

import ThemeContext from '../../../../../../../themes';
import { StyledMenuItem } from './MenuListComponents/StyledMenuItem';
import { StyledMenuLink } from './MenuListComponents/StyledMenuLink';

function MenuItem({ content, signOut }) {
    const { themeMode } = useContext(ThemeContext);


    return (
        <StyledMenuItem>
            <StyledMenuLink signOut={signOut} style={themeMode.main}>
                {content}
            </StyledMenuLink>
        </StyledMenuItem>
    );
}

export default MenuItem;
