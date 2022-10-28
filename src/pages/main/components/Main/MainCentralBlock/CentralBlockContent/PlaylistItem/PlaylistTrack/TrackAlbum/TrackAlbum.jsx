// import { useSelector } from 'react-redux';
import { TrackAlbumLink } from './TrackAlbumComponents/TrackAlbumLink';
import { TrackAlbumBlock } from './TrackAlbumComponents/TrackAuthorBlock';

function TrackAlbum({album}) {
        // const skeleton = useSelector(state => state.skeleton.skeleton)
      
{/* <img src="../img/Skeleton-track-album.png"></img> */}

    

    return (
        <TrackAlbumBlock>
            <TrackAlbumLink>{album}</TrackAlbumLink>
        </TrackAlbumBlock>
    );
}

export default TrackAlbum;
