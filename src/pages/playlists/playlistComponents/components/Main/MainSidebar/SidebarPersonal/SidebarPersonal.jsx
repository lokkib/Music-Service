import { SidebarAvatar } from '../../../../../../main/components/Main/MainSidebar/SidebarPersonal/SidebarPersonalComponents/SidebarAvatar';
import { SidebarPersonalContainer } from '../../../../../../main/components/Main/MainSidebar/SidebarPersonal/SidebarPersonalComponents/SidebarPersonalContainer';
import { SidebarPersonalName } from '../../../../../../main/components/Main/MainSidebar/SidebarPersonal/SidebarPersonalComponents/SidebarPersonalName';

function SidebarPersonal() {
    return (
        <SidebarPersonalContainer>
            <SidebarPersonalName>#</SidebarPersonalName>

            <SidebarAvatar>#</SidebarAvatar>
        </SidebarPersonalContainer>
    );
}

export default SidebarPersonal;
