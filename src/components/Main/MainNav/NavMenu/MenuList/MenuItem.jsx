import './MenuItem.scss';

function MenuItem({
    cls = 'menu__item',
    content,
    clsForLink = 'menu__link',
    http = 'http://',
}) {
    return (
        <li className={cls}>
            <a href={http} className={clsForLink}>
                {content}
            </a>
        </li>
    );
}

export default MenuItem;
