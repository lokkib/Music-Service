import BlockSearch from './BlockSearch/BlockSearch';
import CentralBlockFilter from './CentralBlockFilter/CentralBlockFilter';
import CentralBlockContent from './CentralBlockContent/CentralBlockContent';

import { StyledMainCentralBlock } from './StyledMainCentralBlock';
import { StyledCBHeading } from './StyledCenterBlockHeading';

function MainCentralBlock() {
    return (
        <StyledMainCentralBlock>
            <BlockSearch />
            <StyledCBHeading>Треки</StyledCBHeading>
            {/* <h2 className="centerblock__h2">Треки</h2> */}
            <CentralBlockFilter />
            <CentralBlockContent />
        </StyledMainCentralBlock>
        // <div className="main__centerblock centerblock">

        // </div>
    );
}

export default MainCentralBlock;
