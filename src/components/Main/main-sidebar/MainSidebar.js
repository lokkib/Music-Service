import SidebarPersonal from './sidebar-personal/SidebarPersonal';
import SidebarBlock from './sidebar-block/SidebarBlock';

function MainSidebar() {
    return (
        <div className="main__sidebar sidebar">
            <SidebarPersonal />
            <SidebarBlock />
        </div>
    );
}

export default MainSidebar;
