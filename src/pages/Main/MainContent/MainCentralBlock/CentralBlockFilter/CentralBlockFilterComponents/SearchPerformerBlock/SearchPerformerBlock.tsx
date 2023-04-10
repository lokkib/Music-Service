import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
    deleteAuthors,
    addFilterByAuthor,
} from '../../../../../../../redux/slices/storingAllTracksSlice';
import { RootState } from '../../../../../../../redux/store';
import SearchPerformerGenreContainer from './SearchPerformerContainer';
import SearchPerformerItem from './SearchPerformerItem';
import { Track } from '../../../../../../../@types/slices/Track';
import { SearchPerformerLabel } from './SearchPerformerLabel';
import {
    passAuthorChosen,
    deleteAuthorChosen,
} from '../../../../../../../redux/slices/filterTracks/filteringTracksGenreAuthor';

const SearchPerformerBlock = () => {
    const allTracks = useSelector(
        (state: RootState) => state.storeTracks.allTracks
    );
    const [selected, setSelected] = useState<string[]>([]);
    const [selectedAll, setSelectedAll] = useState<string[]>([]);
    const dispatch = useDispatch();
    const [isChecked, setIsChecked] = useState(false);

    const authorChosenState = useSelector(
        (state: RootState) => state.filteringGenresAuthors.authorsChosen
    );

    const AuthorsChosen = useSelector(
        (state: RootState) => state.storeTracks.filterAuthorsValue
    );

    const checkHandler = () => {
        setIsChecked(!isChecked);
    };

    const RemoveDuplicates = (array: Track[], key: string) =>
        array.reduce((arr: Track[], item: Track) => {
            const removed = arr.filter(
                (i) => i[key as keyof Track] !== item[key as keyof Track]
            );
            return [...removed, item];
        }, []);

    const filteredAuthorsData = RemoveDuplicates(allTracks, 'author');

    const changeColorAllAuthors = (value: string) => {
        selectedAll.push(value);
        setSelectedAll(selectedAll);

        if (AuthorsChosen.includes(value)) {
            setSelectedAll(selectedAll.filter((el) => el !== value));
        }
    };

    function chooseAuthor(e: React.MouseEvent<HTMLInputElement>) {
        if (!(e.target as HTMLInputElement).checked) {
            dispatch(deleteAuthors((e.target as HTMLInputElement).value));
        } else {
            dispatch(addFilterByAuthor((e.target as HTMLInputElement).value));
        }
    }

    const changeColorAuthor = (value: string) => {
        selected.push(value);
        setSelected(selected);
        dispatch(passAuthorChosen(value));
        if (AuthorsChosen.includes(value)) {
            setSelected(selected.filter((el) => el !== value));
            dispatch(deleteAuthorChosen(value));
        }
    };

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
                {filteredAuthorsData.map((el: Track) =>
                    el.author !== '-' ? (
                        <div key={el.id}>
                            <SearchPerformerLabel
                                value={el.author}
                                active={
                                    (selected.length &&
                                        selected.includes(el.author)) ||
                                    authorChosenState.includes(el.author)
                                        ? '#b672ff'
                                        : 'white'
                                }
                            >
                                {el.author}
                                <SearchPerformerItem
                                    onChange={checkHandler}
                                    checked={
                                        !!authorChosenState.includes(el.author)
                                    }
                                    value={el.author}
                                    onClick={(e) => {
                                        chooseAuthor(e);
                                        changeColorAuthor(el.author);
                                    }}
                                    type="checkbox"
                                />
                            </SearchPerformerLabel>
                        </div>
                    ) : (
                        ''
                    )
                )}
                <div>
                    <SearchPerformerLabel
                        active={selectedAll.length ? '#b672ff' : 'white'}
                        onClick={() => changeColorAllAuthors('Все исполнители')}
                        value="Все исполнители"
                    >
                        Все исполнители
                        <SearchPerformerItem
                            onClick={(e) => {
                                chooseAuthor(e);
                            }}
                            value="Все исполнители"
                            type="checkbox"
                        />
                    </SearchPerformerLabel>
                </div>
            </div>
        </SearchPerformerGenreContainer>
    );
};

export default SearchPerformerBlock;
