import SidebarItem from './SidebarItem/SidebarItem';
import './SidebarBlock.scss';

function SidebarBlock() {
    const img = {
        playlist: '../img/playlist01.png',
        hits: '../img/playlist02.png',
        indi: '../img/playlist03.png',
    };

    return (
        <div className="sidebar__block">
            <div className="sidebar__list">
                <SidebarItem src={img.playlist} />
                <SidebarItem src={img.hits} />
                <SidebarItem src={img.indi} />
            </div>
        </div>
    );
}

export default SidebarBlock;
