import { useState, useContext, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useGetPlaylistQuery } from '../../../../../redux/api/tracksApi';
import { getPlaylist } from '../../../../../redux/slices/getPlaylistTracksSlice';
import { holdRenderedTracks } from '../../../../../redux/slices/storingAllTracksSlice';
import ThemeContext from '../../../../../themes';
import { ContentTitleBlock } from '../../../../../components/ContentTitleBlock/ContentTitleBlock';
import { PlaylistTitleAlbum } from '../../../../../components/ContentTitleBlock/PlaylistTitleAlbum';
import { PlaylistTitleAuthor } from '../../../../../components/ContentTitleBlock/PlayistTitleAuthor';
import { PlaylistTitleTrack } from '../../../../../components/ContentTitleBlock/PlayListTitleTrack';
import { Pages } from '../../../../../components/PagesBlock/Pages';
import { PagesBlock } from '../../../../../components/PagesBlock/PagesBlock';
import { PagesHeading } from '../../../../../components/PagesBlock/PagesHeading';
import PlaylistItemSkeleton from '../../../../../components/PlaylistItemSkeleton/PlaylistItemSkeleton';
import PlaylistItem from '../../../../../components/PlayListItem/PlayListItem';
import PlaylistTitleTimeIcon from '../../../../../components/ContentTitleBlock/PlaylistTitleTimeIcon';
import { ContentPlaylist } from '../../../../../components/ContentPlaylist/ContentPlaylist';
import { RootState } from '../../../../../redux/store';
import { Track } from '../../../../../@types/slices/Track';
import { shuffleTracks } from '../../../../../redux/slices/orderOfPlayingSlice';

const CentralBlockContent = () => {
    const { id } = useParams();
    const { data } = useGetPlaylistQuery(id as string);

    const playlistTracksData = useSelector(
        (state: RootState) => state.getPlaylist[0]
    );
    const dispatch = useDispatch();

    const chosenTracksbyName = useSelector(
        (state: RootState) => state.getPlaylist[1]
    );

    const sortedTracks = useSelector(
        (state: RootState) =>
            state.orderOfTracksPlaying.shuffleTracks.sortedRenderedTracks
    );

    const renderedTracks = useSelector(
        (state: RootState) => state.storeTracks.renderedTracks
    );

    useEffect(() => {
        if (data) {
            dispatch(getPlaylist([...data.items]));
            dispatch(shuffleTracks(false));
        }
    }, [data]);

    useEffect(() => {
        if (playlistTracksData.length && data) {
            dispatch(holdRenderedTracks(data.items));
        }
    }, [playlistTracksData]);

    useEffect(() => {
        if (sortedTracks.length) {
            dispatch(holdRenderedTracks(sortedTracks));
        }
    }, [sortedTracks]);

    const [page, setPage] = useState(1);
    const { themeMode } = useContext(ThemeContext);

    useEffect(() => {
        if (chosenTracksbyName.length) {
            dispatch(holdRenderedTracks(chosenTracksbyName));
        }
    }, [chosenTracksbyName]);

    if (!playlistTracksData.length) {
        const array = [1, 2, 3, 4, 5, 6, 7, 8];

        return (
            <>
                {array.map((element) => (
                    <PlaylistItemSkeleton key={element} />
                ))}
            </>
        );
    }

    return (
        <>
            <ContentTitleBlock>
                <PlaylistTitleTrack>Трек</PlaylistTitleTrack>

                <PlaylistTitleAuthor>Исполнитель</PlaylistTitleAuthor>

                <PlaylistTitleAlbum>Альбом</PlaylistTitleAlbum>

                <PlaylistTitleTimeIcon />
            </ContentTitleBlock>

            <ContentPlaylist>
                {page === 1
                    ? (renderedTracks as Track[])
                          .slice(0, 8)
                          .map((track, index) => (
                              <PlaylistItem
                                  track={track}
                                  index={index}
                                  duration={track.duration_in_seconds}
                                  album={track.album}
                                  author={track.author}
                                  name={track.name}
                                  key={track.id}
                                  id={track.id}
                                  src={track.track_file}
                              />
                          ))
                    : ''}

                {page === 2
                    ? (renderedTracks as Track[])
                          .slice(8, 16)
                          .map((track, index) => (
                              <PlaylistItem
                                  track={track}
                                  index={index}
                                  duration={track.duration_in_seconds}
                                  album={track.album}
                                  author={track.author}
                                  name={track.name}
                                  key={track.id}
                                  id={track.id}
                                  src={track.track_file}
                              />
                          ))
                    : ''}
                <PagesBlock>
                    <PagesHeading style={themeMode.main}>
                        Страницы:
                    </PagesHeading>
                    <Pages onClick={() => setPage(1)}>1</Pages>
                    <Pages onClick={() => setPage(2)}>2</Pages>
                </PagesBlock>
            </ContentPlaylist>
        </>
    );
};

export default CentralBlockContent;
