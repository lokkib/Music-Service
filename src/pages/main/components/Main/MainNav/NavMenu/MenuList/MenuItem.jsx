import * as S from './StyledMenuList';
import ThemeContext from '../../../../../../../themes';
import { useContext } from 'react';

function MenuItem({ content, http = 'http://' }) {
    const { themeMode } = useContext(ThemeContext);

    return (
        <S.MenuItem>
            <S.MenuLink style={themeMode.main} href={http}>
                {content}
            </S.MenuLink>
        </S.MenuItem>
    );
}

export default MenuItem;
