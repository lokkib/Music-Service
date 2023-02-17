import { useDispatch } from 'react-redux';

import {
    showNewFirst,
    showOldFirst,
} from '../../../../../../../redux/filterTracks/filterTrackYearSlice';
import SearchYearContainer from './SearchYearContainer';
import SearchYearInput from './SearchYearInput';

const SearchYearBlock = () => {
    const dispatch = useDispatch();

    const showNewTracksFirst = () => {
        dispatch(showNewFirst(true));
        dispatch(showOldFirst(false));
    };

    const showOldTracksFirst = () => {
        dispatch(showOldFirst(true));
        dispatch(showNewFirst(false));
    };
    return (
        <SearchYearContainer>
            <div>
                <SearchYearInput
                    onClick={showOldTracksFirst}
                    value="Более старые"
                    id="old"
                />
            </div>
            <div>
                <SearchYearInput
                    onClick={showNewTracksFirst}
                    value="Более новые"
                    id="new"
                />
            </div>
        </SearchYearContainer>
    );
};

export default SearchYearBlock;
