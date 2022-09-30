import * as S from './StyledMenuList';
import { useContext } from 'react';
import ThemeContext from '../../../../../../../../themes';

function MenuItem({ content, http = 'http://' }) {
    const {theme2} = useContext(ThemeContext);
    return (
        <S.MenuItem>
            <S.MenuLink style={theme2} href={http}>{content}</S.MenuLink>
        </S.MenuItem>
    );
}

export default MenuItem;
