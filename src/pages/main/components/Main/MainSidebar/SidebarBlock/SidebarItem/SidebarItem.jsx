import { getPlaylist } from '../../../../../../../redux/getPlaylistTracks/getPlaylistTracksSlice';
import { Link } from 'react-router-dom';
import { useGetPlaylistQuery } from '../../../../../../../redux/AuthorizationGetTracks/tracksApi';
import * as S from './StyledSidebarItem';
import { useDispatch } from 'react-redux';


function SidebarItem({ alt, src, id }) {
 
    const {data} = useGetPlaylistQuery(id)
    
    const dispatch = useDispatch();


    function handleClickPlaylist () {
        if(data)
        dispatch(getPlaylist([...data.items]))
   
    }
  

    return (
        <S.SidebarItem >
            <Link to={`/playlist/${id}`}>
                <img  onClick={handleClickPlaylist} alt={alt} src={src} />
            </Link>
        </S.SidebarItem>
    );
}

export default SidebarItem;
