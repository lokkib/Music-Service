import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { useGetPlaylistQuery } from '../../../../../../redux/AuthorizationGetTracks/tracksApi';
import { getPlaylist } from '../../../../../../redux/getPlaylistTracks/getPlaylistTracksSlice';
import * as S from './StyledSidebarItem';

const SidebarItem = ({ alt, src, id }) => {
    const { data } = useGetPlaylistQuery(id);

    const dispatch = useDispatch();

    const handleClickPlaylist = () => {
        if (data) dispatch(getPlaylist([...data.items]));
    };

    return (
        <S.SidebarItem>
            <Link to={`/playlist/${id}`}>
                <img
                    onKeyDown={handleClickPlaylist}
                    onClick={handleClickPlaylist}
                    alt={alt}
                    src={src}
                />
            </Link>
        </S.SidebarItem>
    );
};

export default SidebarItem;
