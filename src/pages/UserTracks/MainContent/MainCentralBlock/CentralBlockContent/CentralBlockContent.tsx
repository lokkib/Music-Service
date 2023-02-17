import { useEffect, useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { PlaylistTitleAlbum } from '../../../../../components/ContentTitleBlock/PlaylistTitleAlbum';
import { useGetFavouriteTracksQuery } from '../../../../../redux/AuthorizationGetTracks/tracksApi';
import { changeTheme } from '../../../../../redux/lightDarkTheme/lightDarkThemeSlice';
import {
    holdRenderedTracks,
    setMyTracks,
} from '../../../../../redux/storeAllTracks/storingAllTracksSlice';
import ThemeContext from '../../../../../themes';
import { Pages } from '../../../../../components/PagesBlock/Pages';
import { PagesBlock } from '../../../../../components/PagesBlock/PagesBlock';
import { PagesHeading } from '../../../../../components/PagesBlock/PagesHeading';
import PlaylistItem from '../../../../../components/PlayListItem/PlayListItem';
import PlaylistItemSkeleton from '../../../../Main/MainContent/MainCentralBlock/CentralBlockContent/PlaylistItemSkeleton/PlaylistItemSkeleton';
import PlaylistTitleTimeIcon from './PlaylistTitleTimeIcon';
import { ContentTitleBlock } from '../../../../../components/ContentTitleBlock/ContentTitleBlock';
import { PlaylistTitleAuthor } from '../../../../../components/ContentTitleBlock/PlayistTitleAuthor';
import { PlaylistTitleTrack } from '../../../../../components/ContentTitleBlock/PlayListTitleTrack';
import { ContentPlaylist } from '../../../../../components/ContentPlaylist/ContentPlaylist';

const CentralBlockContent = () => {
    const navigate = useNavigate();
    const { data, isLoading } = useGetFavouriteTracksQuery();
    const [page, setPage] = useState(1);
    const { themeMode } = useContext(ThemeContext);
    const dispatch = useDispatch();
    const sortedTracks = useSelector(
        (state) => state.orderOfTracksPlaying.shuffleTracks.sortedRenderedTracks
    );

    const chosenTracksbyName = useSelector(
        (state) => state.storeTracks.myTracksFiltered
    );

    const renderedTracks = useSelector(
        (state) => state.storeTracks.renderedTracks
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

    useEffect(() => {
        if (navigate) {
            dispatch(changeTheme(true));
        }
    }, [navigate]);

    if (isLoading) {
        const array = [1, 2, 3, 4, 5, 6, 7, 8];
        return array.map((el, index) => <PlaylistItemSkeleton key={index} />);
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
