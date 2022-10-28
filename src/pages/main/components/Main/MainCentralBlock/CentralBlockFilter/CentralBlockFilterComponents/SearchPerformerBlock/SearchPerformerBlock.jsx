import SearchPerformerGenreContainer from './SearchPerformerContainer';
import SearchPerformerGenreItem from './SearchPerformerGenreItem';
import { useScrollBar } from './useScrollbar';

import { useRef } from 'react';
import { useSelector } from 'react-redux';
const SearchPerformerBlock = () => {
    
    const allTracks = useSelector(state => state.storeTracks.allTracks)

    console.log(allTracks)


    const hasScroll = allTracks.length > 5;

    const wrapper = useRef(null);
    useScrollBar(wrapper, hasScroll);

    return (
        <SearchPerformerGenreContainer>
            <div ref={wrapper}>
                {allTracks.map((el) => {
                    return (
                        el.author !== '-' ? <SearchPerformerGenreItem key={el.id}>
                        {el.author }
                     </SearchPerformerGenreItem>
                        : ''
                        
                    );
                })}
                  <SearchPerformerGenreItem >
                          Все
                       </SearchPerformerGenreItem>
            </div>
        </SearchPerformerGenreContainer>
    );
};

export default SearchPerformerBlock;
