import BlockSearch from './BlockSearch/BlockSearch';
import CentralBlockFilter from './CentralBlockFilter/CentralBlockFilter';
import CentralBlockContent from './CentralBlockContent/CentralBlockContent';
import './MainCentralBlock.scss';

function MainCentralBlock() {
    return (
        <div className="main__centerblock centerblock">
            <BlockSearch />
            <h2 className="centerblock__h2">Треки</h2>
            <CentralBlockFilter />
            <CentralBlockContent />
        </div>
    );
}

export default MainCentralBlock;
