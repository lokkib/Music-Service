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

const SearchPerformerBlock = () => {
    const allTracks = useSelector(
        (state: RootState) => state.storeTracks.allTracks
    );
    const [selected, setSelected] = useState<string[]>([]);
    const [selectedAll, setSelectedAll] = useState<string[]>([]);
    const dispatch = useDispatch();

    const AuthorsChosen = useSelector(
        (state: RootState) => state.storeTracks.filterAuthorsValue
    );

    const RemoveDuplicates = (array: Track[], key: string) =>
        array.reduce((arr: Track[], item: Track) => {
            const removed = arr.filter(
                (i) => i[key as keyof Track] !== item[key as keyof Track]
            );
            return [...removed, item];
        }, []);

    const filteredAuthorsData = RemoveDuplicates(allTracks, 'author');

    function chooseAuthor(e: React.MouseEvent<HTMLInputElement>) {
        if (!(e.target as HTMLInputElement).checked) {
            dispatch(deleteAuthors((e.target as HTMLInputElement).value));
        } else {
            dispatch(addFilterByAuthor((e.target as HTMLInputElement).value));
        }
    }

    function changeColorAuthor(value: string) {
        selected.push(value);
        setSelected(selected);

        if (AuthorsChosen.includes(value)) {
            setSelected(selected.filter((el) => el !== value));
        }
    }

    const changeColorAllAuthors = (value: string) => {
        selectedAll.push(value);
        setSelectedAll(selectedAll);

        if (AuthorsChosen.includes(value)) {
            setSelectedAll(selectedAll.filter((el) => el !== value));
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
                                onClick={() => changeColorAuthor(el.author)}
                                value={el.author}
                                active={
                                    selected.includes(el.author)
                                        ? '#b672ff'
                                        : 'white'
                                }
                            >
                                {el.author}
                                <SearchPerformerItem
                                    value={el.author}
                                    onClick={(e) => {
                                        chooseAuthor(e);
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
