
import { useContext } from 'react';

import ThemeContext from '../../../../../../../themes';
import { FilterButton } from '../../../../../../main/components/Main/MainCentralBlock/CentralBlockFilter/CentralBlockFilterComponents/FilterButton';
import { FilterContainer } from '../../../../../../main/components/Main/MainCentralBlock/CentralBlockFilter/CentralBlockFilterComponents/FilterContainer';
import { FilterTitle } from '../../../../../../main/components/Main/MainCentralBlock/CentralBlockFilter/CentralBlockFilterComponents/FilterTitle';

function CentralBlockFilter() {
    const { themeMode } = useContext(ThemeContext);
 

    return (
        <FilterContainer>
            <FilterTitle>Искать по:</FilterTitle>
            <div>
                <FilterButton style={themeMode.border}>
                    исполнителю
                </FilterButton>
            </div>
            <div>
                <FilterButton style={themeMode.border}>
                    году выпуска
                </FilterButton>
            </div>
            <div>
                <FilterButton style={themeMode.border}>жанру</FilterButton>
            </div>
        </FilterContainer>
    );
}

export default CentralBlockFilter;
