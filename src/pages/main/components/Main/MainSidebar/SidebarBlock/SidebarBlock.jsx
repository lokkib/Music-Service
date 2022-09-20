import SidebarItem from './SidebarItem/SidebarItem';

import { useState, useEffect } from 'react';
import * as S from './StyledSidebarContent';

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
        <S.SidebarBlock>
            <S.SidebarList>
                <SidebarItem
                    id="1"
                    alt="days playlist"
                    src={musicSelections || img.playlist}
                />
                <SidebarItem
                    id="2"
                    alt="hits playlist"
                    src={musicSelections || img.hits}
                />
                <SidebarItem
                    id="3"
                    alt="indi playlist"
                    src={musicSelections || img.indi}
                />
            </S.SidebarList>
        </S.SidebarBlock>
    );
}

export default SidebarBlock;
