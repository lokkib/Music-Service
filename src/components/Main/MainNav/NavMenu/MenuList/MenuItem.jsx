import * as S from './StyledMenuList';

function MenuItem({ content, http = 'http://' }) {
    return (
        <S.MenuItem>
            <S.MenuLink href={http}>{content}</S.MenuLink>
        </S.MenuItem>
    );
}

export default MenuItem;
