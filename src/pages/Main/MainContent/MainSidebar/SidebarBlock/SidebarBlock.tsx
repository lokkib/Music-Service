import { useState } from 'react';
import { useSelector } from 'react-redux';

import SidebarItem from './SidebarItem/SidebarItem';
import * as S from './StyledSidebarContent';
import { RootState } from '../../../../../redux/store';

const SidebarBlock = () => {
    const [musicSelections, ,] = useState<string>(
        '../img/Skeleton-selection.png'
    );

    const allTracksData = useSelector(
        (state: RootState) => state.storeTracks.allTracks
    );

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
                    src={!allTracksData ? musicSelections : img.playlist}
                />
                <SidebarItem
                    id="2"
                    alt="hits playlist"
                    src={!allTracksData ? musicSelections : img.hits}
                />
                <SidebarItem
                    id="3"
                    alt="indi playlist"
                    src={!allTracksData ? musicSelections : img.indi}
                />
            </S.SidebarList>
        </S.SidebarBlock>
    );
};

export default SidebarBlock;
