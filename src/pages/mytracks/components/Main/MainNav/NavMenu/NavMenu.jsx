import MenuItem from './MenuList/MenuItem';
import { StyledNavMenu } from './StyledNavMenu';

function NavMenu() {
    return (
        <StyledNavMenu>
            <MenuItem content="Главное" />
            <MenuItem content="Мой плейлист" />
            <MenuItem content="Войти" />
        </StyledNavMenu>
    );
}

export default NavMenu;
