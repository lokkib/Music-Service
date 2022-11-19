import { useContext } from 'react';
import { Link } from 'react-router-dom';

import ThemeContext from '../../../../../../../themes';
import { StyledMenuItem } from './MenuListComponents/StyledMenuItem';

function MenuItem({ navigation, content }) {
    const { themeMode } = useContext(ThemeContext);

    return (
        <StyledMenuItem>
            <Link style={{ ...themeMode.main }} to={navigation}>
                {content}
            </Link>
            {}
        </StyledMenuItem>
    );
}

export default MenuItem;
