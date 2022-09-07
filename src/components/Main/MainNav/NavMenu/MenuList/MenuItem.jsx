import './MenuItem.scss';

function MenuItem({
    className = 'menu__item',
    content,
    linkClassName = 'menu__link',
    http = 'http://',
}) {
    return (
        <li className={className}>
            <a href={http} className={linkClassName}>
                {content}
            </a>
        </li>
    );
}

export default MenuItem;
