import { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
    toggleChoseGenre,
    allTracksChosen,
} from '../../../../../../../redux/slices/storingAllTracksSlice';
import SearchPerformerGenreContainer from '../SearchPerformerBlock/SearchPerformerContainer';
import SearchGenreItem from './SearchGenreItem';
import { RootState } from '../../../../../../../redux/store';
import { Track } from '../../../../../../../@types/slices/Track';

const SearchGenreBlock = () => {
    const [selected, setSelected] = useState<number[]>([]);
    const [chosenAllTracks, setChosenAllGenres] = useState(false);

    const allTracks = useSelector(
        (state: RootState) => state.storeTracks.allTracks
    );

    const dispatch = useDispatch();
    const [genreChosen, setGenreChosen] = useState(false);

    const genres = [
        'Классическая музыка',
        'Рок музыка',
        'Электронная музыка',
        'Все жанры',
    ];

    const RemoveDuplicates = (array: Track[], key: string, value: string) => {
        const filteredGenreData = array.filter(
            (i) => i[key as keyof Track] === value
        );
        return filteredGenreData;
    };

    const filteredGenreClassicsData = RemoveDuplicates(
        allTracks,
        'genre',
        'Классическая музыка'
    );

    function chooseGenre(filteredData: Track[]) {
        const typeOfGene = filteredData[0].genre;
        setGenreChosen(!genreChosen);
        dispatch(toggleChoseGenre([filteredData, !genreChosen, typeOfGene]));
    }

    function changeColor(id: number) {
        if (selected.length && selected.includes(id)) {
            setSelected(selected.filter((el) => el !== id));
        } else {
            selected.push(id);
            setSelected(selected);
        }
    }

    const chooseAllTracks = () => {
        setChosenAllGenres(!chosenAllTracks);
        dispatch(allTracksChosen(chosenAllTracks));
    };

    const wrapper = useRef(null);

    return (
        <SearchPerformerGenreContainer ref={wrapper}>
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
                    <SearchGenreItem
                        active={
                            selected.length && selected.includes(id)
                                ? '#b672ff'
                                : 'white'
                        }
                        onClick={() => {
                            chooseGenre(filteredGenreClassicsData);
                            changeColor(id);
                        }}
                    >
                        {el}
                    </SearchGenreItem>
                ))}
            </div>
        </SearchPerformerGenreContainer>
    );
};

export default SearchGenreBlock;
