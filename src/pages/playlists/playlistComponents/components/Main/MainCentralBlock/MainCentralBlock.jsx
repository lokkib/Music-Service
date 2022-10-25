import { useParams } from 'react-router-dom';

import PLAYLISTS from '../../../../../../constants/playlists';
import BlockSearch from './BlockSearch/BlockSearch';
import CentralBlockContent from './CentralBlockContent/CentralBlockContent';
import CentralBlockFilter from './CentralBlockFilter/CentralBlockFilter';
import { StyledCBHeading } from './StyledCenterBlockHeading';
import { StyledMainCentralBlock } from './StyledMainCentralBlock';

function MainCentralBlock() {
    const params = useParams();

    const playlist = PLAYLISTS.find(
        (playlist) => playlist.id === Number(params.id)
    );

    return (
        <StyledMainCentralBlock>
            <BlockSearch />
            <StyledCBHeading>{playlist.naming}</StyledCBHeading>

            <CentralBlockFilter />
            <CentralBlockContent />
        </StyledMainCentralBlock>
    );
}

export default MainCentralBlock;
