import { useDispatch } from 'react-redux';

import {
    showNewFirst,
    showOldFirst,
} from '../../../../../../../redux/filterTracks/filterTrackYearSlice';
import SearchYearContainer from './SearchYearContainer';
import SearchYearInput from './SearchYearInput';

const SearchYearBlock = () => {
    const dispatch = useDispatch();

    function showNewTracksFirst() {
        dispatch(showNewFirst(true));
        dispatch(showOldFirst(false));
    }

    function showOldTracksFirst() {
        dispatch(showOldFirst(true));
        dispatch(showNewFirst(false));
    }
    return (
        <SearchYearContainer>
            <div>
                <SearchYearInput
                    onClick={showOldTracksFirst}
                    value="Более старые"
                    id="old"
                />
                <label htmlFor="old">Более старые</label>
            </div>
            <div>
                <SearchYearInput
                    onClick={showNewTracksFirst}
                    value="Более новые"
                    id="new"
                />
                <label htmlFor="new">Более новые</label>
            </div>
        </SearchYearContainer>
    );
};

export default SearchYearBlock;
