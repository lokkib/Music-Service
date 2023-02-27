import { useEffect, useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PlaylistTitleAlbum } from '../../../../../components/ContentTitleBlock/PlaylistTitleAlbum';
import { useGetFavouriteTracksQuery } from '../../../../../redux/api/tracksApi';
import {
    holdRenderedTracks,
    setMyTracks,
} from '../../../../../redux/slices/storingAllTracksSlice';
import ThemeContext from '../../../../../themes';
import { Pages } from '../../../../../components/PagesBlock/Pages';
import { PagesBlock } from '../../../../../components/PagesBlock/PagesBlock';
import { PagesHeading } from '../../../../../components/PagesBlock/PagesHeading';
import PlaylistItem from '../../../../../components/PlayListItem/PlayListItem';
import PlaylistItemSkeleton from '../../../../../components/PlaylistItemSkeleton/PlaylistItemSkeleton';
import PlaylistTitleTimeIcon from './PlaylistTitleTimeIcon';
import { ContentTitleBlock } from '../../../../../components/ContentTitleBlock/ContentTitleBlock';
import { PlaylistTitleAuthor } from '../../../../../components/ContentTitleBlock/PlayistTitleAuthor';
import { PlaylistTitleTrack } from '../../../../../components/ContentTitleBlock/PlayListTitleTrack';
import { ContentPlaylist } from '../../../../../components/ContentPlaylist/ContentPlaylist';
import { RootState } from '../../../../../redux/store';
import { Track } from '../../../../../@types/slices/Track';

const CentralBlockContent = () => {
    const { data, isLoading } = useGetFavouriteTracksQuery();
    const [page, setPage] = useState<number>(1);
    const { themeMode } = useContext(ThemeContext);
    const dispatch = useDispatch();
    const sortedTracks = useSelector(
        (state: RootState) =>
            state.orderOfTracksPlaying.shuffleTracks.sortedRenderedTracks
    );

    const chosenTracksbyName = useSelector(
        (state: RootState) => state.storeTracks.myTracksFiltered
    );

    const renderedTracks: Track[] = useSelector(
        (state: RootState) => state.storeTracks.renderedTracks
    );
    useEffect(() => {
        if (data) {
            dispatch(setMyTracks(data));
            dispatch(holdRenderedTracks(data));
        }
    }, [data]);

    useEffect(() => {
        if (sortedTracks.length) {
            dispatch(holdRenderedTracks(sortedTracks));
        }
    }, [sortedTracks]);

    useEffect(() => {
        if (chosenTracksbyName.length) {
            dispatch(holdRenderedTracks(chosenTracksbyName));
        }
    }, [chosenTracksbyName]);

    if (isLoading) {
        const array = [1, 2, 3, 4, 5, 6, 7, 8];
        return (
            <>
                {array.map((_, index) => (
                    <PlaylistItemSkeleton key={index} />
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
                {page === 1 && renderedTracks.length
                    ? renderedTracks
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
                <PagesBlock>
                    <PagesHeading style={themeMode.main}>
                        Страницы:
                    </PagesHeading>
                    <Pages onClick={() => setPage(1)}>1</Pages>
                    <Pages onClick={() => setPage(2)}>2</Pages>
                    <Pages onClick={() => setPage(3)}>3</Pages>
                    <Pages onClick={() => setPage(4)}>4</Pages>
                </PagesBlock>
            </ContentPlaylist>
        </>
    );
};

export default CentralBlockContent;
