import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { useGetFavouriteTracksQuery } from '../../../../../../redux/AuthorizationGetTracks/tracksApi';
import { changeTheme } from '../../../../../../redux/lightDarkTheme/lightDarkThemeSlice';
import { holdRenderedTracks } from '../../../../../../redux/storeAllTracks/storingAllTracksSlice';
import { setMyTracks } from '../../../../../../redux/storeAllTracks/storingAllTracksSlice';
import ThemeContext from '../../../../../../themes';
import { Pages } from '../../../../../main/components/Main/MainCentralBlock/CentralBlockContent/Pages/Pages';
import { PagesBlock } from '../../../../../main/components/Main/MainCentralBlock/CentralBlockContent/Pages/PagesBlock';
import { PagesHeading } from '../../../../../main/components/Main/MainCentralBlock/CentralBlockContent/Pages/PagesHeading';
import PlaylistItem from '../../../../../main/components/Main/MainCentralBlock/CentralBlockContent/PlaylistItem/PlaylistItem';
import PlaylistItemSkeleton from '../../../../../main/components/Main/MainCentralBlock/CentralBlockContent/PlaylistItemSkeleton/PlaylistItemSkeleton';
import PlaylistTitleTimeIcon from './PlaylistTitleTimeIcon';
import * as S from './StyledCentralBlockContent';
function CentralBlockContent() {
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
        return array.map((el, index) => {
            return <PlaylistItemSkeleton key={index} />;
        });
    } else {
        return (
            <>
                <S.ContentTitle>
                    <S.PlaylistTitleTrack>Трек</S.PlaylistTitleTrack>

                    <S.PlaylistTitleAuthor>Исполнитель</S.PlaylistTitleAuthor>

                    <S.PlaylistTitleAlbum>Альбом</S.PlaylistTitleAlbum>

                    <div>
                        <PlaylistTitleTimeIcon></PlaylistTitleTimeIcon>
                    </div>
                </S.ContentTitle>

                <S.ContentPlaylist>
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
                    <PagesBlock>
                        <PagesHeading style={themeMode.main}>
                            Страницы:
                        </PagesHeading>
                        <Pages onClick={() => setPage(1)}>1</Pages>
                        <Pages onClick={() => setPage(2)}>2</Pages>
                        <Pages onClick={() => setPage(3)}>3</Pages>
                        <Pages onClick={() => setPage(4)}>4</Pages>
                    </PagesBlock>
                </S.ContentPlaylist>
            </>
        );
    }
}

export default CentralBlockContent;
