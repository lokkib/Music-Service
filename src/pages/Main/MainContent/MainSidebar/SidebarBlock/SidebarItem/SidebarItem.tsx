import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { useGetPlaylistQuery } from '../../../../../../redux/api/tracksApi';
import { getPlaylist } from '../../../../../../redux/slices/getPlaylistTracksSlice';
import * as S from './StyledSidebarItem';
import { SideBarItemProps } from '../../../../../../@types/props/SideBarItemProps';

const SidebarItem = ({ alt, src, id }: SideBarItemProps) => {
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
