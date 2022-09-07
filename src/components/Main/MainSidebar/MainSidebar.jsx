import SidebarPersonal from './SidebarPersonal/SidebarPersonal';
import SidebarBlock from './SidebarBlock/SidebarBlock';
import './MainSidebar.scss';

function MainSidebar() {
    return (
        <div className="main__sidebar sidebar">
            <SidebarPersonal />
            <SidebarBlock />
        </div>
    );
}

export default MainSidebar;
