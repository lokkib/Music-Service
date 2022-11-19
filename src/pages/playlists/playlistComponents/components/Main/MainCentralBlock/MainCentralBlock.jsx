import { useParams } from 'react-router-dom';

import PLAYLISTS from '../../../../../../constants/playlists';
import BlockSearch from '../../../../../main/components/Main/MainCentralBlock/BlockSearch/BlockSearch';
import CentralBlockContent from './CentralBlockContent/CentralBlockContent';
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

            <CentralBlockContent />
        </StyledMainCentralBlock>
    );
}

export default MainCentralBlock;
