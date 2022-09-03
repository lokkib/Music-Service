function MenuLink({ http = 'http://', cls = 'menu__link', content }) {
    return (
        <a href={http} className={cls}>
           {content}
        </a>
    );
}

export default MenuLink;
