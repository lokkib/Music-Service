import BlockSearch from './BlockSearch/BlockSearch';
import CentralBlockContent from './CentralBlockContent/CentralBlockContent';
import CentralBlockFilter from './CentralBlockFilter/CentralBlockFilter';
import { StyledCBHeading } from './StyledCenterBlockHeading';
import { StyledMainCentralBlock } from './StyledMainCentralBlock';
import { useGetPlaylistQuery } from '../../../../../redux/AuthorizationGetTracks/tracksApi';
import { useDispatch, useSelector } from 'react-redux';
import { getPlaylist } from '../../../../../redux/getPlaylistTracks/getPlaylistTracksSlice';
function MainCentralBlock() {

    const {data} = useGetPlaylistQuery(1)
    
    const dispatch = useDispatch();
    const s = useSelector(state => state.getPlaylist)

    function handleClickPlaylist () {
        if(data)
        dispatch(getPlaylist(data.items))
        console.log(data.items)
    }
  
    console.log(s)
    return (
        <StyledMainCentralBlock>
            <BlockSearch />
            <StyledCBHeading onClick={handleClickPlaylist}>Треки</StyledCBHeading>

            <CentralBlockFilter />
            <CentralBlockContent />
        </StyledMainCentralBlock>
    );
}

export default MainCentralBlock;
