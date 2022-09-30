import BlockSearch from './BlockSearch/BlockSearch';
import CentralBlockFilter from './CentralBlockFilter/CentralBlockFilter';
import CentralBlockContent from './CentralBlockContent/CentralBlockContent';

import { StyledMainCentralBlock } from './StyledMainCentralBlock';
import { StyledCBHeading } from './StyledCenterBlockHeading';


function MainCentralBlock() {
    

    return (
       
            <StyledMainCentralBlock >
                <BlockSearch />
                <StyledCBHeading >Треки</StyledCBHeading>

                <CentralBlockFilter />
                <CentralBlockContent />
            </StyledMainCentralBlock>
    );
}

export default MainCentralBlock;
