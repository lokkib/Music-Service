import SearchPerformerGenreContainer from '../SearchPerformerBlock/SearchPerformerContainer';
import { useScrollBar } from '../SearchPerformerBlock/useScrollbar';
import { useSelector } from 'react-redux';
import { useRef } from 'react';
import { toggleChoseGenre } from '../../../../../../../../redux/storeAllTracks/storingAllTracksSlice';
import { useDispatch } from 'react-redux';
import ThemeContext, {themes} from '../../../../../../../../themes';
import { useContext } from 'react';
import { useState } from 'react';
import SearchGenreItem from './SearchGenreItem';
import { allTracksChosen } from '../../../../../../../../redux/storeAllTracks/storingAllTracksSlice';

const SearchGenreBlock = () => {
    const [chosenAllTracks, setChosenAllGenres] = useState(false);
    const { chosingGenrePerformerColor, setGenrePerformerColor } = useContext(ThemeContext);
    const allTracks = useSelector((state) => state.storeTracks.allTracks);
    const dispatch = useDispatch();
    const [genreChosen, setGenreChosen] = useState(false)


    const RemoveDuplicates = (array, key, value) => {
        const filteredGenreData = array.filter((i) => i[key] === value);
        return filteredGenreData;
    };

    const filteredGenreClassicsData = RemoveDuplicates(
        allTracks,
        'genre',
        'Классическая музыка'
    );
    const filteredGenreRockData = RemoveDuplicates(
        allTracks,
        'genre',
        'Рок музыка'
    );
    const filteredGenreElectronicData = RemoveDuplicates(
        allTracks,
        'genre',
        'Электронная музыка'
    );



    function chooseGenre(filteredData) {
        
        const typeOfGene = filteredData[0]['genre']
        setGenreChosen(!genreChosen)
        dispatch(toggleChoseGenre([filteredData, genreChosen, typeOfGene]));
        
      
    }

    function changeColor (e) {
        setGenrePerformerColor(
            chosingGenrePerformerColor === themes.filteringChosenPerformerGenreColor.notChosen
                ? themes.filteringChosenPerformerGenreColor.chosen
                : themes.filteringChosenPerformerGenreColor.notChosen
        );
            e.target.style.color = chosingGenrePerformerColor.color
    }

    function chooseAllTracks() {
        setChosenAllGenres(!chosenAllTracks);
        dispatch(allTracksChosen(chosenAllTracks));
    }

    const hasScroll = allTracks.length > 1;

    const wrapper = useRef(null);
    useScrollBar(wrapper, hasScroll);

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
                <SearchGenreItem  onClick={(e) => {chooseGenre(filteredGenreClassicsData); changeColor(e)}}>
                    Классическая музыка
                </SearchGenreItem>
                <SearchGenreItem   onClick={(e) => {chooseGenre(filteredGenreElectronicData); changeColor(e)}}>
                    Электронная музыка
                </SearchGenreItem>
                <SearchGenreItem   onClick={(e) => {chooseGenre(filteredGenreRockData); changeColor(e)}} >
                    Рок музыка
                </SearchGenreItem>
                <SearchGenreItem  onClick={(e) => {chooseGenre(allTracks); changeColor(e)}}>
                    <div  onClick={chooseAllTracks}>
                    Все жанры
                    </div>
                    
                    </SearchGenreItem>
            </div>
        </SearchPerformerGenreContainer>
    );
};

export default SearchGenreBlock;
