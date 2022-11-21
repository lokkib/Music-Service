import { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import { useGetPlaylistQuery } from '../../../../../../../redux/AuthorizationGetTracks/tracksApi';
import { getPlaylist } from '../../../../../../../redux/getPlaylistTracks/getPlaylistTracksSlice';
import { changeTheme } from '../../../../../../../redux/lightDarkTheme/lightDarkThemeSlice';
import { holdRenderedTracks } from '../../../../../../../redux/storeAllTracks/storingAllTracksSlice';
import ThemeContext from '../../../../../../../themes';
import { ContentPlaylist } from '../../../../../../main/components/Main/MainCentralBlock/CentralBlockContent/CentralBlockContentComponents/ContentPlayList';
import { ContentTitle } from '../../../../../../main/components/Main/MainCentralBlock/CentralBlockContent/CentralBlockContentComponents/ContentTitle';
import { PlaylistTitleAlbum } from '../../../../../../main/components/Main/MainCentralBlock/CentralBlockContent/CentralBlockContentComponents/PlaylistTitleAlbum';
import { PlaylistTitleAuthor } from '../../../../../../main/components/Main/MainCentralBlock/CentralBlockContent/CentralBlockContentComponents/PlaylistTitleAuthor';
import { PlaylistTitleTrack } from '../../../../../../main/components/Main/MainCentralBlock/CentralBlockContent/CentralBlockContentComponents/PlaylistTitleTrack';
import { Pages } from '../../../../../../main/components/Main/MainCentralBlock/CentralBlockContent/Pages/Pages';
import { PagesBlock } from '../../../../../../main/components/Main/MainCentralBlock/CentralBlockContent/Pages/PagesBlock';
import { PagesHeading } from '../../../../../../main/components/Main/MainCentralBlock/CentralBlockContent/Pages/PagesHeading';
import PlaylistItemSkeleton from '../../../../../../main/components/Main/MainCentralBlock/CentralBlockContent/PlaylistItemSkeleton/PlaylistItemSkeleton';
import PlaylistItem from './PlaylistItem/PlaylistItem';
import PlaylistTitleTimeIcon from './PlaylistTitleTimeIcon';
function CentralBlockContent() {
    const navigate = useNavigate();
    const { id } = useParams();
    const { data } = useGetPlaylistQuery(id);

    const playlistTracksData = useSelector((state) => state.getPlaylist[0]);
    const dispatch = useDispatch();

    const chosenTracksbyName = useSelector((state) => state.getPlaylist[1]);

    const sortedTracks = useSelector(
        (state) => state.orderOfTracksPlaying.shuffleTracks.sortedRenderedTracks
    );

    const renderedTracks = useSelector(
        (state) => state.storeTracks.renderedTracks
    );

    useEffect(() => {
        if (data) {
            dispatch(getPlaylist([...data.items]));
        }
    }, [data]);

    useEffect(() => {
        if (playlistTracksData.length) {
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
        if (navigate) {
            dispatch(holdRenderedTracks(playlistTracksData));
            dispatch(changeTheme(true));
        }
    }, [navigate]);

    useEffect(() => {
        if (chosenTracksbyName.length) {
            dispatch(holdRenderedTracks(chosenTracksbyName));
        }
    }, [chosenTracksbyName]);

    if (!playlistTracksData.length) {
        const array = [1, 2, 3, 4, 5, 6, 7, 8];

        return array.map((element) => {
            return <PlaylistItemSkeleton key={element} />;
        });
    }

    return (
        <>
            <ContentTitle>
                <PlaylistTitleTrack>Трек</PlaylistTitleTrack>

                <PlaylistTitleAuthor>Исполнитель</PlaylistTitleAuthor>

                <PlaylistTitleAlbum>Альбом</PlaylistTitleAlbum>

                <div>
                    <PlaylistTitleTimeIcon></PlaylistTitleTimeIcon>
                </div>
            </ContentTitle>

            <ContentPlaylist>
                {page === 1
                    ? renderedTracks.slice(0, 8).map((track, index) => {
                          return (
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
                          );
                      })
                    : ''}

                {page === 2
                    ? renderedTracks.slice(8, 16).map((track, index) => {
                          return (
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
                          );
                      })
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
}

export default CentralBlockContent;
