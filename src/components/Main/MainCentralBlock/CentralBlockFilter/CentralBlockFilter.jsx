
import { useState } from 'react';
import * as S from './StyledCentralBlockFilter';

function CentralBlockFilter() {
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
                <S.FilterButton onClick={showSearchResult}>исполнителю</S.FilterButton>
                {/* <div
                    onClick={showSearchResult}
                    className="filter__button button-author _btn-text"
                >
                    исполнителю
                </div> */}
                {searchImages.perfomer}
            </div>
            <div>
                <S.FilterButton onClick={showSearchResult2}>
                году выпуска
                </S.FilterButton>
                {/* <div
                    onClick={showSearchResult2}
                    className="filter__button button-year _btn-text"
                >
                    году выпуска
                </div> */}
                {searchImages.genre}
            </div>
            <div>
                <S.FilterButton onClick={showSearchResult3}>
                жанру
                </S.FilterButton>
                {/* <div
                    onClick={showSearchResult3}
                    className="filter__button button-genre _btn-text"
                >
                    жанру
                </div> */}
                {searchImages.year}
            </div>
        </S.CentralBlockFilter>
        // <div className="centerblock__filter filter">
            
        // </div>
    );
}

export default CentralBlockFilter;
