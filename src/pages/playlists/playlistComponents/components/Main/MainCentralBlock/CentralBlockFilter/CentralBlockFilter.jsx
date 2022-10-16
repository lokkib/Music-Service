import { useState } from 'react';
import * as S from './StyledCentralBlockFilter';
import { useContext } from 'react';
import ThemeContext from '../../../../../../../themes';

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
        <S.CentralBlockFilter>
            <S.FilterTitle>Искать по:</S.FilterTitle>
            <div>
                <S.FilterButton
                    style={themeMode.border}
                    onClick={showSearchResult}
                >
                    исполнителю
                </S.FilterButton>

                {searchImages.perfomer}
            </div>
            <div>
                <S.FilterButton
                    style={themeMode.border}
                    onClick={showSearchResult2}
                >
                    году выпуска
                </S.FilterButton>

                {searchImages.genre}
            </div>
            <div>
                <S.FilterButton
                    style={themeMode.border}
                    onClick={showSearchResult3}
                >
                    жанру
                </S.FilterButton>

                {searchImages.year}
            </div>
        </S.CentralBlockFilter>
    );
}

export default CentralBlockFilter;
