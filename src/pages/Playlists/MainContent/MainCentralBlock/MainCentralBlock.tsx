import { useParams } from 'react-router-dom';

import PLAYLISTS from '../../../../constants/playlists';
import BlockSearch from '../../../../components/BlockSearch/BlockSearch';
import CentralBlockContent from './CentralBlockContent/CentralBlockContent';
import { StyledCBHeading } from './StyledCenterBlockHeading';
import { StyledMainCentralBlock } from './StyledMainCentralBlock';

const MainCentralBlock = () => {
    const params = useParams();

    const playlist = PLAYLISTS.find(
        (element) => element.id === Number(params.id)
    );

    return (
        <StyledMainCentralBlock>
            <BlockSearch />
            <StyledCBHeading>{playlist && playlist.naming}</StyledCBHeading>

            <CentralBlockContent />
        </StyledMainCentralBlock>
    );
};

export default MainCentralBlock;
