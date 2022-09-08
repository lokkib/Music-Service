import SidebarItem from './SidebarItem/SidebarItem';
import './SidebarBlock.scss';
import { useState, useEffect } from 'react';

function SidebarBlock() {
    const [musicSelections, setMusicSelections] = useState(
        '../img/Skeleton-selection.png'
    );

    useEffect(() => {
        const timer = setTimeout(() => {
            setMusicSelections(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const img = {
        playlist: '../img/playlist01.png',
        hits: '../img/playlist02.png',
        indi: '../img/playlist03.png',
    };

    return (
        <div className="sidebar__block">
            <div className="sidebar__list">
                <SidebarItem src={musicSelections || img.playlist} />
                <SidebarItem src={musicSelections || img.hits} />
                <SidebarItem src={musicSelections || img.indi} />
            </div>
        </div>
    );
}

export default SidebarBlock;
