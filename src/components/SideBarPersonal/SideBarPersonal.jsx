import { SidebarAvatar } from './components/SideBarAvatar';
import { SidebarPersonalWrapper } from './components/SideBarPersonalWrapper';
import { SidebarPersonalName } from './components/SideBarPersonalName';

const SideBarPersonal = () => (
    <SidebarPersonalWrapper>
        <SidebarPersonalName />

        <SidebarAvatar />
    </SidebarPersonalWrapper>
);

export default SideBarPersonal;
