import MenuLink from './MenuLink';

function MenuItem({ cls = 'menu__item' }) {
    return (
        <li className={cls}>
            <MenuLink></MenuLink>
        </li>
    );
}

export default MenuItem;
