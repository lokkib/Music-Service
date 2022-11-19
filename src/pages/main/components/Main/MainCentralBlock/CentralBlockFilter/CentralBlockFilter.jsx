import { useState } from 'react';
import { useContext } from 'react';

import ThemeContext from '../../../../../../themes';
import { FilterButton } from './CentralBlockFilterComponents/FilterButton';
import { FilterContainer } from './CentralBlockFilterComponents/FilterContainer';
import { FilterTitle } from './CentralBlockFilterComponents/FilterTitle';
import SearchGenreBlock from './CentralBlockFilterComponents/SearchGenreBlock/SearchGenreBlock';
import SearchPerformerBlock from './CentralBlockFilterComponents/SearchPerformerBlock/SearchPerformerBlock';
import SearchYearBlock from './CentralBlockFilterComponents/SearchYearBlock/SearchYearBlock';

function CentralBlockFilter() {
    const { themeMode } = useContext(ThemeContext);
    const [searchPerformer, setSearchPerfomer] = useState(false);
    const [searchGenre, setSearchGenre] = useState(false);
    const [searchYear, setSearchYear] = useState(false);

    function showSearchResult() {
        setSearchPerfomer(!searchPerformer);
        setSearchGenre(false);
        setSearchYear(false);
    }

    function showSearchResult2() {
        setSearchGenre(false);
        setSearchPerfomer(false);
        setSearchYear(!searchYear);
    }

    function showSearchResult3() {
        setSearchYear(false);
        setSearchPerfomer(false);
        setSearchGenre(!searchGenre);
    }

    return (
        <>
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
        </>
    );
}

export default CentralBlockFilter;
