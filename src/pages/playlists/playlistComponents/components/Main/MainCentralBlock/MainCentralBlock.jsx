import BlockSearch from './BlockSearch/BlockSearch';
import CentralBlockFilter from './CentralBlockFilter/CentralBlockFilter';
import CentralBlockContent from './CentralBlockContent/CentralBlockContent';

import { StyledMainCentralBlock } from './StyledMainCentralBlock';
import { StyledCBHeading } from './StyledCenterBlockHeading';
import { useParams } from 'react-router-dom';
import PLAYLISTS from '../../../../../../constants/playlists';

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
