import { ContentPlaylist } from './CentralBlockContentComponents/ContentPlayList';
import { ContentTitle } from './CentralBlockContentComponents/ContentTitle';
import { PlaylistTitleAlbum } from './CentralBlockContentComponents/PlaylistTitleAlbum';
import { PlaylistTitleAuthor } from './CentralBlockContentComponents/PlaylistTitleAuthor';
import { PlaylistTitleTrack } from './CentralBlockContentComponents/PlaylistTitleTrack';
import PlaylistItem from './PlaylistItem/PlaylistItem';
import PlaylistTitleTimeIcon from './PlaylistTitleTimeIcon';
import { useGetAllTracksQuery } from '../../../../../../redux/AuthorizationGetTracks/tracksApi';
import { useState } from 'react';
import { PagesBlock } from './Pages/PagesBlock';
import { PagesHeading } from './Pages/PagesHeading';
import { Pages } from './Pages/Pages';
import ThemeContext from '../../../../../../themes';
import { useContext } from 'react';
import PlaylistItemSkeleton from './PlaylistItemSkeleton/PlaylistItemSkeleton';
import { storeAllTracks } from '../../../../../../redux/storeAllTracks/storingAllTracksSlice';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
function CentralBlockContent() {
    const [page, setPage] = useState(1);
    const [filteredTracksData, setFilteredOldTRacks] = useState(false);
    const { data, isLoading } = useGetAllTracksQuery();
    const { themeMode } = useContext(ThemeContext);


    const dispatch = useDispatch()
    const oldTracksFirstClicked = useSelector(
        (state) => state.filterYear.filterTracks.oldTracksFirstClicked
    );
    const newTracksFirstClicked = useSelector(
        (state) => state.filterYear.filterTracks.newTracksFirstClicked
    );
  
        useEffect(() => {
               console.log(data)
            dispatch(storeAllTracks(data))
         
        },[data])


    useEffect(() => {
        if (oldTracksFirstClicked && data) {
            console.log(data)
            const data2 = [...data];
            setFilteredOldTRacks(
                data2.sort(function (a, b) {
                    return new Date(a.release_date) - new Date(b.release_date);
                })
            );
        }

        if (newTracksFirstClicked && data) {
            const data2 = [...data];
            setFilteredOldTRacks(
                data2.sort(function (a, b) {
                    return new Date(b.release_date) - new Date(a.release_date);
                })
            );
        }
    }, [oldTracksFirstClicked, newTracksFirstClicked]);

    if (isLoading) {
        const array = [1, 2, 3, 4, 5, 6, 7, 8];

        return array.map((el) => {
            return <PlaylistItemSkeleton key={el} />;
        });
    } else {
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
                        ? (filteredTracksData || data)
                              .slice(0, 8)
                              .map((track) => {
                                  return (
                                      <PlaylistItem
                                          duration={track.duration_in_seconds}
                                          album={track.album}
                                          author={track.author}
                                          name={track.name}
                                          key={track.id}
                                          src={track.track_file.split('/')[5]}
                                      />
                                  );
                              })
                        : ''}

                    {page === 2
                        ? (filteredTracksData || data)
                              .slice(8, 16)
                              .map((track) => {
                                  return (
                                      <PlaylistItem
                                          duration={track.duration_in_seconds}
                                          album={track.album}
                                          author={track.author}
                                          name={track.name}
                                          key={track.id}
                                          src={track.track_file.split('/')[5]}
                                      />
                                  );
                              })
                        : ''}

                    {page === 3
                        ? (filteredTracksData || data)
                              .slice(16, 24)
                              .map((track) => {
                                  return (
                                      <PlaylistItem
                                          duration={track.duration_in_seconds}
                                          album={track.album}
                                          author={track.author}
                                          name={track.name}
                                          key={track.id}
                                          src={track.track_file.split('/')[5]}
                                      />
                                  );
                              })
                        : ''}

                    {page === 4
                        ? (filteredTracksData || data)
                              .slice(24, 29)
                              .map((track) => {
                                  return (
                                      <PlaylistItem
                                          duration={track.duration_in_seconds}
                                          album={track.album}
                                          author={track.author}
                                          name={track.name}
                                          key={track.id}
                                          src={track.track_file.split('/')[5]}
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
                </ContentPlaylist>
            </>
        );
    }
}

export default CentralBlockContent;
