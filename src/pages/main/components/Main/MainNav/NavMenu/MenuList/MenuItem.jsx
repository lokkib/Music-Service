import { useContext } from 'react';

import ThemeContext from '../../../../../../../themes';
import { StyledMenuItem } from './MenuListComponents/StyledMenuItem';
import { StyledMenuLink } from './MenuListComponents/StyledMenuLink';

function MenuItem({ content, http = 'http://' }) {
    const { themeMode } = useContext(ThemeContext);

    return (
        <StyledMenuItem>
            <StyledMenuLink style={themeMode.main} href={http}>
                {content}
            </StyledMenuLink>
        </StyledMenuItem>
    );
}

export default MenuItem;
