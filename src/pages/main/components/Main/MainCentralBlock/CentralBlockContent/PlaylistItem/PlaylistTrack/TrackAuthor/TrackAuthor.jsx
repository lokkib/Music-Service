
import { useContext } from 'react';
// import { useSelector } from 'react-redux';
import ThemeContext from '../../../../../../../../../themes';
import { TrackAuthorBlock } from './TrackAuthorComponents/TrackAuthorBlock';
import { TrackAuthorLink } from './TrackAuthorComponents/TrackAuthorLink';

function TrackAuthor({author}) {
    const { themeMode } = useContext(ThemeContext);
    // const skeleton = useSelector(state => state.skeleton.skeleton)
        
{/* <img src="../img/Skeleton-track-author.png"></img> */}



    return (
        <TrackAuthorBlock>
            <TrackAuthorLink style={themeMode.main}>
                {author}
            </TrackAuthorLink>
        </TrackAuthorBlock>
    );
}

export default TrackAuthor;
