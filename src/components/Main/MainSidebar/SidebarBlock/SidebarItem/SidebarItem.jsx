
import * as S from './StyledSidebarItem'

function SidebarItem({ alt = "day's playlist", src }) {
    return (
        <S.SidebarItem>
            <S.SidebarLink>

            <img alt={alt} src={src} />
            </S.SidebarLink>
{/* <a className="sidebar__link" href="#">
               
            </a> */}
        </S.SidebarItem>
        // <div className="sidebar__item">
            
        // </div>
    );
}

export default SidebarItem;
