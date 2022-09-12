import * as S from './StyledSidebarItem';

function SidebarItem({ alt = "day's playlist", src }) {
    return (
        <S.SidebarItem>
            <S.SidebarLink>
                <img alt={alt} src={src} />
            </S.SidebarLink>
        </S.SidebarItem>
    );
}

export default SidebarItem;
