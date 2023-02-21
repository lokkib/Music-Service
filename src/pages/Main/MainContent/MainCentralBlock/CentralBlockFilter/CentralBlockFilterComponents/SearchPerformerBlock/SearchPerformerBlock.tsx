import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
    toggleChoseAuthors,
    allTracksChosen,
} from '../../../../../../../redux/slices/storingAllTracksSlice';
import { RootState } from '../../../../../../../redux/store';
import SearchPerformerGenreContainer from './SearchPerformerContainer';
import SearchPerformerItem from './SearchPerformerItem';
import { Track } from '../../../../../../../@types/slices/Track';

const SearchPerformerBlock = () => {
    const [isPerformerChosen, setChoice] = useState(false);
    const [chosenAllTracks, setChosenAllAuthors] = useState(false);
    const allTracks = useSelector(
        (state: RootState) => state.storeTracks.allTracks
    );
    const [selected, setSelected] = useState<number[]>([]);

    const dispatch = useDispatch();

    function chooseAllTracks() {
        setChosenAllAuthors(!chosenAllTracks);
        dispatch(allTracksChosen(chosenAllTracks));
    }

    const RemoveDuplicates = (array: Track[], key: string) =>
        array.reduce((arr: Track[], item: Track) => {
            const removed = arr.filter(
                (i) => i[key as keyof Track] !== item[key as keyof Track]
            );
            return [...removed, item];
        }, []);

    const filteredAuthorsData = RemoveDuplicates(allTracks, 'author');

    const wrapper = useRef(null);

    function chooseAuthor(track: Track) {
        setChoice(() => !isPerformerChosen);
        dispatch(toggleChoseAuthors([track]));
    }

    function changeColorAuthor(id: number) {
        if (selected.length && selected.includes(id)) {
            setSelected(selected.filter((el) => el !== id));
        } else {
            selected.push(id);
            setSelected(selected);
        }
    }

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
                {filteredAuthorsData.map((el: Track) =>
                    el.author !== '-' ? (
                        <SearchPerformerItem
                            onClick={() => {
                                changeColorAuthor(el.id);
                                chooseAuthor(el);
                            }}
                            key={el.id}
                            active={
                                selected.length && selected.includes(el.id)
                                    ? '#b672ff'
                                    : 'white'
                            }
                        >
                            {el.author}
                        </SearchPerformerItem>
                    ) : (
                        ''
                    )
                )}
                <SearchPerformerItem
                    key={30}
                    active={
                        selected.length && selected.includes(key)
                            ? '#b672ff'
                            : 'white'
                    }
                    onClick={() => {
                        changeColorAuthor(key);
                        chooseAllTracks();
                    }}
                >
                    Все
                </SearchPerformerItem>
            </div>
        </SearchPerformerGenreContainer>
    );
};

export default SearchPerformerBlock;
