import { useState, useContext } from 'react';

import ThemeContext from '../../../../../themes';
import { FilterButton } from './CentralBlockFilterComponents/FilterButton';
import { FilterContainer } from './CentralBlockFilterComponents/FilterContainer';
import { FilterTitle } from './CentralBlockFilterComponents/FilterTitle';
import SearchGenreBlock from './CentralBlockFilterComponents/SearchGenreBlock/SearchGenreBlock';
import SearchPerformerBlock from './CentralBlockFilterComponents/SearchPerformerBlock/SearchPerformerBlock';
import SearchYearBlock from './CentralBlockFilterComponents/SearchYearBlock/SearchYearBlock';

const CentralBlockFilter = () => {
    const { themeMode } = useContext(ThemeContext);
    const [searchPerformer, setSearchPerfomer] = useState(false);
    const [searchGenre, setSearchGenre] = useState(false);
    const [searchYear, setSearchYear] = useState(false);

    const showSearchResult = () => {
        setSearchPerfomer(!searchPerformer);
        setSearchGenre(false);
        setSearchYear(false);
    };

    const showSearchResult2 = () => {
        setSearchGenre(false);
        setSearchPerfomer(false);
        setSearchYear(!searchYear);
    };

    const showSearchResult3 = () => {
        setSearchYear(false);
        setSearchPerfomer(false);
        setSearchGenre(!searchGenre);
    };

    return (
        <FilterContainer>
            <FilterTitle>Искать по:</FilterTitle>
            <div>
                <FilterButton
                    style={themeMode.border}
                    onClick={showSearchResult}
                >
                    исполнителю
                </FilterButton>

                {searchPerformer ? <SearchPerformerBlock /> : ''}
            </div>
            <div>
                <FilterButton
                    style={themeMode.border}
                    onClick={showSearchResult2}
                >
                    году выпуска
                </FilterButton>
                {searchYear ? <SearchYearBlock /> : ''}
            </div>
            <div>
                <FilterButton
                    style={themeMode.border}
                    onClick={showSearchResult3}
                >
                    жанру
                </FilterButton>

                {searchGenre ? <SearchGenreBlock /> : ''}
            </div>
        </FilterContainer>
    );
};

export default CentralBlockFilter;
