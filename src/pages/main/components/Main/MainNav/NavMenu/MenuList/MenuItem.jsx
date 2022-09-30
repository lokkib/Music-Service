import * as S from './StyledMenuList';
import ThemeContext from '../../../../../../../themes';
import { useContext } from 'react';



function MenuItem({ content, http = 'http://' }) {
    
    const {theme2} = useContext(ThemeContext);


    return (
        <S.MenuItem >
            <S.MenuLink style={theme2}  href={http}>{content}</S.MenuLink>
        </S.MenuItem>
    );
}

export default MenuItem;
