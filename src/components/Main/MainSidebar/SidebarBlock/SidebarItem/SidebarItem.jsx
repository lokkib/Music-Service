import './SidebarItem.scss';

function SidebarItem({ alt = "day's playlist", src }) {
    return (
        <div className="sidebar__item">
            <a className="sidebar__link" href="#">
                <img alt={alt} src={src} />
            </a>
        </div>
    );
}

export default SidebarItem;
