import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
    deleteGenres,
    addFilterByGenre,
} from '../../../../../../../redux/slices/storingAllTracksSlice';
import SearchPerformerGenreContainer from '../SearchPerformerBlock/SearchPerformerContainer';
import SearchGenreItem from './SearchGenreItem';
import { RootState } from '../../../../../../../redux/store';
import { SearchGenreLabel } from './SearchGenreLabel';

const SearchGenreBlock = () => {
    const [selected, setSelected] = useState<string[]>([]);
    const [selectedAll, setSelectedAll] = useState<string[]>([]);
    const dispatch = useDispatch();

    const genres = ['Классическая музыка', 'Рок музыка', 'Электронная музыка'];

    const GenresChosen = useSelector(
        (state: RootState) => state.storeTracks.filterGenreValue
    );

    const changeColorAllGenres = (value: string) => {
        selectedAll.push(value);
        setSelectedAll(selectedAll);

        if (GenresChosen.includes(value)) {
            setSelectedAll(selectedAll.filter((el) => el !== value));
        }
    };

    function chooseGenre(e: React.MouseEvent<HTMLInputElement>) {
        if (!(e.target as HTMLInputElement).checked) {
            dispatch(deleteGenres((e.target as HTMLInputElement).value));
        } else {
            dispatch(addFilterByGenre((e.target as HTMLInputElement).value));
        }
    }

    function changeColorGenre(value: string) {
        selected.push(value);
        setSelected(selected);

        if (GenresChosen.includes(value)) {
            setSelected(selected.filter((el) => el !== value));
        }
    }

    return (
        <SearchPerformerGenreContainer>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    rowGap: '24px',
                    alignItems: 'flex-start',
                    paddingBottom: '34px',
                }}
            >
                {genres.map((el, id) => (
                    <div key={id}>
                        <SearchGenreLabel
                            value={el}
                            active={
                                selected.length && selected.includes(el)
                                    ? '#b672ff'
                                    : 'white'
                            }
                        >
                            {el}
                            <SearchGenreItem
                                value={el}
                                type="checkbox"
                                onClick={(e) => {
                                    chooseGenre(e);
                                    changeColorGenre(el);
                                }}
                            />
                        </SearchGenreLabel>
                    </div>
                ))}
                <div>
                    <SearchGenreLabel
                        active={selectedAll.length ? '#b672ff' : 'white'}
                        onClick={() => changeColorAllGenres('Все жанры')}
                        value="Все жанры"
                    >
                        Все жанры
                        <SearchGenreItem
                            onClick={(e) => {
                                chooseGenre(e);
                            }}
                            type="checkbox"
                            value="Все жанры"
                        />
                    </SearchGenreLabel>
                </div>
            </div>
        </SearchPerformerGenreContainer>
    );
};

export default SearchGenreBlock;
