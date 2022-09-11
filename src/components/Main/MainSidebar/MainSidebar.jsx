import SidebarPersonal from './SidebarPersonal/SidebarPersonal';
import SidebarBlock from './SidebarBlock/SidebarBlock';

import { StyledMainSideBar } from './StyledMainSideBar';

function MainSidebar() {
    return (
        <StyledMainSideBar>
            <SidebarPersonal />
            <SidebarBlock />
        </StyledMainSideBar>
        // <div className="main__sidebar sidebar">

        // </div>
    );
}

export default MainSidebar;
