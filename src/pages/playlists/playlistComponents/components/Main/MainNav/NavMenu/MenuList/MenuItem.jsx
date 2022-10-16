import * as S from './StyledMenuList';
import { useContext } from 'react';
import ThemeContext from '../../../../../../../../themes';

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
