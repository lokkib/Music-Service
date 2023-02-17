import SidebarBlock from './SidebarBlock/SidebarBlock';
import SideBarPersonal from '../../../../components/SideBarPersonal/SideBarPersonal';
import { StyledMainSideBar } from './StyledMainSideBar';

const MainSidebar = () => (
    <StyledMainSideBar>
        <SideBarPersonal />
        <SidebarBlock />
    </StyledMainSideBar>
);

export default MainSidebar;
