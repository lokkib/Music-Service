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
import { useNavigate } from 'react-router-dom';

function CentralBlockContent() {
    const navigate = useNavigate()

    const chosenAuthorTracks = useSelector(
        (state) => state.storeTracks.finalAuthorTracksData
    );
    
    const chosenGenreTracks = useSelector(
        (state) => state.storeTracks.finaltoggledGenreTracksArray
    );

    const chosenTracksbyName = useSelector(state => state.storeTracks.filteredTracksbyName)
  

    const [finalChosenTracksGenreData, setFinalChosenTracksGenreData] = useState(false);
    const [page, setPage] = useState(1);
    
    const [filteredTracksData, setFilteredTRacksData] = useState(false);
    const [filteredTracksbyName, setFilteredTRacksName] = useState(false);
    const [filteredTracksAuthorData, setFilteredAuthorTracks] = useState(false);
    const { data, isLoading } = useGetAllTracksQuery();
    const { themeMode } = useContext(ThemeContext);

    const dispatch = useDispatch();
    const oldTracksFirstClicked = useSelector(
        (state) => state.filterYear.filterTracks.oldTracksFirstClicked
    );
    const newTracksFirstClicked = useSelector(
        (state) => state.filterYear.filterTracks.newTracksFirstClicked
    );

    const allTracksChosen = useSelector(
        (state) => state.storeTracks.allTracksChosen
    );

    const allTracksData = useSelector(state => state.storeTracks.allTracks)

    useEffect(() => {
        dispatch(storeAllTracks(data));
       
       
        
    }, [data, allTracksData]);

    useEffect(() => {
        if (oldTracksFirstClicked && data) {
            const data2 = [...data];
            setFilteredTRacksData(
                data2.sort(function (a, b) {
                    return new Date(a.release_date) - new Date(b.release_date);
                })
            );
            setFilteredAuthorTracks(false);
            setFinalChosenTracksGenreData(false)
            setFilteredTRacksName(false)

      
        }

        if (newTracksFirstClicked && data) {
            const data2 = [...data];
            setFilteredTRacksData(
                data2.sort(function (a, b) {
                    return new Date(b.release_date) - new Date(a.release_date);
                })
            );
            setFilteredAuthorTracks(false);
            setFinalChosenTracksGenreData(false)
            setFilteredTRacksName(false)

        }
    }, [oldTracksFirstClicked, newTracksFirstClicked]);

    useEffect(() => {
        if (data && chosenAuthorTracks) {
            setFilteredTRacksData(false);
            setFilteredAuthorTracks(chosenAuthorTracks);
            setFinalChosenTracksGenreData(false)
            setFilteredTRacksName(false)
 
        }
    }, [chosenAuthorTracks]);

    useEffect(() => {
        if (data && allTracksChosen) {
            setFilteredTRacksData(false);
            setFilteredAuthorTracks(false);
            setFinalChosenTracksGenreData(false)
            setFilteredTRacksName(false)

        }
    }, [allTracksChosen]);

    useEffect(() => {
        if(data && chosenGenreTracks) {
            setFilteredTRacksData(false);
            setFilteredAuthorTracks(false);
            setFilteredTRacksName(false)
    
            const array = [];
            for (let element of chosenGenreTracks) {
                array.push(...element)
            }
            setFinalChosenTracksGenreData(array)
            console.log(array)
        }
       
  
    },[chosenGenreTracks])


    useEffect(() => {
        if(data && chosenTracksbyName) {
            setFilteredTRacksName(chosenTracksbyName)
            setFilteredTRacksData(false);
            setFilteredAuthorTracks(false);
            setFinalChosenTracksGenreData(false)
        
        }   
    }, [chosenTracksbyName])


    useEffect(() => {
        if (navigate) {
           console.log('!!!!!!')
         
           setFilteredTRacksName(false)
           setFilteredTRacksData(false);
           setFilteredAuthorTracks(false);
           setFinalChosenTracksGenreData(false)
           
        }
      }, [navigate ]);

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
                        ? (
                            filteredTracksbyName ||  finalChosenTracksGenreData ||     filteredTracksData ||
                              filteredTracksAuthorData ||
                              data
                          )
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
                        ? ( filteredTracksbyName || finalChosenTracksGenreData ||     filteredTracksData || filteredTracksData || data)
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
                        ? ( filteredTracksbyName || finalChosenTracksGenreData ||     filteredTracksData || filteredTracksData || data)
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
                        ? ( filteredTracksbyName || finalChosenTracksGenreData ||     filteredTracksData || filteredTracksData || data)
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
