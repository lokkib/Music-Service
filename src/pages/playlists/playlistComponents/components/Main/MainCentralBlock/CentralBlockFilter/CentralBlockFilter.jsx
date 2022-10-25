import { useState } from 'react';
import { useContext } from 'react';

import ThemeContext from '../../../../../../../themes';
import { FilterButton } from '../../../../../../main/components/Main/MainCentralBlock/CentralBlockFilter/CentralBlockFilterComponents/FilterButton';
import { FilterContainer } from '../../../../../../main/components/Main/MainCentralBlock/CentralBlockFilter/CentralBlockFilterComponents/FilterContainer';
import { FilterTitle } from '../../../../../../main/components/Main/MainCentralBlock/CentralBlockFilter/CentralBlockFilterComponents/FilterTitle';

function CentralBlockFilter() {
    const { themeMode } = useContext(ThemeContext);
    const [searchPerformer, setSearchPerfomer] = useState(false);
    const [searchGenre, setSearchGenre] = useState(false);
    const [searchYear, setSearchYear] = useState(false);

    const searchImages = {};
    if (searchPerformer) {
        searchImages.perfomer = (
            <img
                style={{ position: 'absolute', zIndex: 1 }}
                src="../img/perfomer.png"
                alt="perfomer"
            ></img>
        );
    }

    if (searchGenre) {
        searchImages.genre = (
            <img
                style={{ position: 'absolute', zIndex: 1 }}
                src="../img/genre.png"
                alt="genre"
            ></img>
        );
    }

    if (searchYear) {
        searchImages.year = (
            <img
                style={{ position: 'absolute', zIndex: 1 }}
                src="../img/year.png"
                alt="year"
            ></img>
        );
    }

    function showSearchResult() {
        setSearchPerfomer(!searchPerformer);
        setSearchGenre(false);
        setSearchYear(false);
    }

    function showSearchResult2() {
        setSearchGenre(!searchGenre);
        setSearchPerfomer(false);
        setSearchYear(false);
    }

    function showSearchResult3() {
        setSearchYear(!searchYear);
        setSearchPerfomer(false);
        setSearchGenre(false);
    }

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

                {searchImages.perfomer}
            </div>
            <div>
                <FilterButton
                    style={themeMode.border}
                    onClick={showSearchResult2}
                >
                    году выпуска
                </FilterButton>

                {searchImages.genre}
            </div>
            <div>
                <FilterButton
                    style={themeMode.border}
                    onClick={showSearchResult3}
                >
                    жанру
                </FilterButton>

                {searchImages.year}
            </div>
        </FilterContainer>
    );
}

export default CentralBlockFilter;
