import { useDispatch } from 'react-redux';

import { useGetPlaylistQuery } from '../../../../../redux/AuthorizationGetTracks/tracksApi';
import { getPlaylist } from '../../../../../redux/getPlaylistTracks/getPlaylistTracksSlice';
import BlockSearch from './BlockSearch/BlockSearch';
import CentralBlockContent from './CentralBlockContent/CentralBlockContent';
import CentralBlockFilter from './CentralBlockFilter/CentralBlockFilter';
import { StyledCBHeading } from './StyledCenterBlockHeading';
import { StyledMainCentralBlock } from './StyledMainCentralBlock';

function MainCentralBlock() {
    const { data } = useGetPlaylistQuery(1);

    const dispatch = useDispatch();

    function handleClickPlaylist() {
        if (data) dispatch(getPlaylist(data.items));
    }

    return (
        <StyledMainCentralBlock>
            <BlockSearch />
            <StyledCBHeading onClick={handleClickPlaylist}>
                Треки
            </StyledCBHeading>

            <CentralBlockFilter />
            <CentralBlockContent />
        </StyledMainCentralBlock>
    );
}

export default MainCentralBlock;
