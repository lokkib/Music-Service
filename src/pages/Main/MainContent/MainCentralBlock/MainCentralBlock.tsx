import { useDispatch } from 'react-redux';

import { useGetPlaylistQuery } from '../../../../redux/api/tracksApi';
import { getPlaylist } from '../../../../redux/slices/getPlaylistTracksSlice';
import BlockSearch from '../../../../components/BlockSearch/BlockSearch';
import CentralBlockContent from './CentralBlockContent/CentralBlockContent';
import CentralBlockFilter from './CentralBlockFilter/CentralBlockFilter';
import { StyledCBHeading } from './StyledCenterBlockHeading';
import { StyledMainCentralBlock } from './StyledMainCentralBlock';

const MainCentralBlock = () => {
    const { data } = useGetPlaylistQuery(1);

    const dispatch = useDispatch();

    const handleClickPlaylist = () => {
        if (data) dispatch(getPlaylist(data.items));
    };

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
};

export default MainCentralBlock;
