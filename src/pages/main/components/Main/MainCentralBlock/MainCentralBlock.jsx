import BlockSearch from './BlockSearch/BlockSearch';
import CentralBlockContent from './CentralBlockContent/CentralBlockContent';
import CentralBlockFilter from './CentralBlockFilter/CentralBlockFilter';
import { StyledCBHeading } from './StyledCenterBlockHeading';
import { StyledMainCentralBlock } from './StyledMainCentralBlock';

function MainCentralBlock() {
    return (
        <StyledMainCentralBlock>
            <BlockSearch />
            <StyledCBHeading>Треки</StyledCBHeading>

            <CentralBlockFilter />
            <CentralBlockContent />
        </StyledMainCentralBlock>
    );
}

export default MainCentralBlock;
