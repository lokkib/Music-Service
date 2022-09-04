import MenuItem from './MenuList/MenuItem';
import './NavMenu.scss';

function NavMenu() {
    return (
        <ul className="menu__list">
            <MenuItem content="Главное" />
            <MenuItem content="Мой плейлист" />
            <MenuItem content="Войти" />
        </ul>
    );
}

export default NavMenu;
