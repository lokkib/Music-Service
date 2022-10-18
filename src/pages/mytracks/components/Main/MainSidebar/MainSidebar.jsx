import SidebarBlock from './SidebarBlock/SidebarBlock';
import SidebarPersonal from './SidebarPersonal/SidebarPersonal';
import { StyledMainSideBar } from './StyledMainSideBar';

function MainSidebar() {
    return (
        <StyledMainSideBar>
            <SidebarPersonal />
            <SidebarBlock />
        </StyledMainSideBar>
    );
}

export default MainSidebar;
