import BlockSearch from '../../../../main/components/Main/MainCentralBlock/BlockSearch/BlockSearch';
import CentralBlockContent from './CentralBlockContent/CentralBlockContent';
import { StyledCBHeading } from './StyledCenterBlockHeading';
import { StyledMainCentralBlock } from './StyledMainCentralBlock';

function MainCentralBlock() {
    return (
        <StyledMainCentralBlock>
            <BlockSearch />
            <StyledCBHeading>Мои Треки</StyledCBHeading>

            <CentralBlockContent />
        </StyledMainCentralBlock>
    );
}

export default MainCentralBlock;
