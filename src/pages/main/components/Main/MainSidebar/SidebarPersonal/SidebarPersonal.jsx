import { SidebarAvatar } from './SidebarPersonalComponents/SidebarAvatar';
import { SidebarPersonalContainer } from './SidebarPersonalComponents/SidebarPersonalContainer';
import { SidebarPersonalName } from './SidebarPersonalComponents/SidebarPersonalName';

function SidebarPersonal() {
    return (
        <SidebarPersonalContainer>
            <SidebarPersonalName>#</SidebarPersonalName>

            <SidebarAvatar>#</SidebarAvatar>
        </SidebarPersonalContainer>
    );
}

export default SidebarPersonal;
