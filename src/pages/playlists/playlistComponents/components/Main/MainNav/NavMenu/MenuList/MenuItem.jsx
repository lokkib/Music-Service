import { useContext } from 'react';

import ThemeContext from '../../../../../../../../themes';
import { StyledMenuItem } from '../../../../../../../main/components/Main/MainNav/NavMenu/MenuList/MenuListComponents/StyledMenuItem';
import { StyledMenuLink } from '../../../../../../../main/components/Main/MainNav/NavMenu/MenuList/MenuListComponents/StyledMenuLink';

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
