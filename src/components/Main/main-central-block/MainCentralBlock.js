import CentralBlockSearch from './central-block-search/CentralBlockSearch';
import CentralBlockFilter from './central-block-filter/CentralBlockFilter';
import CentralBlockContent from './central-block-content/CentralBlockContent';

function MainCentralBlock() {
    return (
        <div className="main__centerblock centerblock">
            <CentralBlockSearch />
            <h2 className="centerblock__h2">Треки</h2>
            <CentralBlockFilter />
            <CentralBlockContent />
        </div>
    );
}

export default MainCentralBlock;
