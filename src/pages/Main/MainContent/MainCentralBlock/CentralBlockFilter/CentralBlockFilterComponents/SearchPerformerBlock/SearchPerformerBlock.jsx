import { useRef, useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
    toggleChoseAuthors,
    allTracksChosen,
} from '../../../../../../../redux/storeAllTracks/storingAllTracksSlice';
import ThemeContext, { themes } from '../../../../../../../themes';
import SearchPerformerGenreContainer from './SearchPerformerContainer';
import SearchPerformerItem from './SearchPerformerItem';
import { useScrollBar } from './useScrollbar';

const SearchPerformerBlock = () => {
    const { chosingGenrePerformerColor, setGenrePerformerColor } =
        useContext(ThemeContext);
    const [chosenAuthor, setChoice] = useState(false);
    const [chosenAllTracks, setChosenAllAuthors] = useState(false);
    const allTracks = useSelector((state) => state.storeTracks.allTracks);

    const dispatch = useDispatch();

    function chooseAllTracks() {
        setChosenAllAuthors(!chosenAllTracks);
        dispatch(allTracksChosen(chosenAllTracks));
    }

    const RemoveDuplicates = (array, key) =>
        array.reduce((arr, item) => {
            const removed = arr.filter((i) => i[key] !== item[key]);
            return [...removed, item];
        }, []);

    const filteredAuthorsData = RemoveDuplicates(allTracks, 'author');
    const hasScroll = allTracks.length > 5;

    const wrapper = useRef(null);
    useScrollBar(wrapper, hasScroll);

    function chooseAuthor(author, track) {
        setChoice(!chosenAuthor);

        dispatch(toggleChoseAuthors([author, !chosenAuthor, track]));
    }
    function changeColorAuthor(e) {
        setGenrePerformerColor(
            chosingGenrePerformerColor ===
                themes.filteringChosenPerformerGenreColor.notChosen
                ? themes.filteringChosenPerformerGenreColor.chosen
                : themes.filteringChosenPerformerGenreColor.notChosen
        );

        e.target.style.color = chosingGenrePerformerColor.color;
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
                {filteredAuthorsData.map((el) =>
                    el.author !== '-' ? (
                        <SearchPerformerItem
                            authorName={el.author}
                            onClick={(e) => {
                                changeColorAuthor(e);
                                chooseAuthor(el.author, el);
                            }}
                            key={el.id}
                        >
                            {el.author}
                        </SearchPerformerItem>
                    ) : (
                        ''
                    )
                )}
                <SearchPerformerItem
                    onClick={(e) => {
                        changeColorAuthor(e);
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
