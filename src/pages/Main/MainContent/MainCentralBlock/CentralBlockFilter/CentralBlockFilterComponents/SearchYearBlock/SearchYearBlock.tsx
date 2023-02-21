import { useDispatch } from 'react-redux';

import {
    showNewFirst,
    showOldFirst,
} from '../../../../../../../redux/slices/filterTracks/filterTrackYearSlice';
import SearchYearContainer from './SearchYearContainer';
import SearchYearInput from './SearchYearInput';
import { StyledInputWrapper } from './StyledInputWrapper';

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
            <StyledInputWrapper>
                Более старые
                <SearchYearInput onClick={showOldTracksFirst} id="old" />
            </StyledInputWrapper>

            <StyledInputWrapper>
                Более новые
                <SearchYearInput onClick={showNewTracksFirst} id="new" />
            </StyledInputWrapper>
        </SearchYearContainer>
    );
};

export default SearchYearBlock;
