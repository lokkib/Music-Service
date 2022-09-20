import * as S from './StyledSidebarItem';
import { Link } from 'react-router-dom';

function SidebarItem({ alt, src, id }) {
    return (
        <S.SidebarItem>
            <Link to={`/playlist/${id}`}>
                <img alt={alt} src={src} />
            </Link>
        </S.SidebarItem>
    );
}

export default SidebarItem;
