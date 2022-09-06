import './MenuItem.scss';

function MenuItem({
    className = 'menu__item',
    content,
    classNameForLink = 'menu__link',
    http = 'http://',
}) {
    return (
        <li className={className}>
            <a href={http} className={classNameForLink}>
                {content}
            </a>
        </li>
    );
}

export default MenuItem;
