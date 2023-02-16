import BlockSearch from '../../../../components/BlockSearch/BlockSearch';
import CentralBlockContent from './CentralBlockContent/CentralBlockContent';
import { StyledCBHeading } from './StyledCenterBlockHeading';
import { StyledMainCentralBlock } from './StyledMainCentralBlock';

const MainCentralBlock = () => (
    <StyledMainCentralBlock>
        <BlockSearch />
        <StyledCBHeading>Мои Треки</StyledCBHeading>

        <CentralBlockContent />
    </StyledMainCentralBlock>
);

export default MainCentralBlock;
