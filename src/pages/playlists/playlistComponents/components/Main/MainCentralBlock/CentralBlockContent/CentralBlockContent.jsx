import { ContentPlaylist } from '../../../../../../main/components/Main/MainCentralBlock/CentralBlockContent/CentralBlockContentComponents/ContentPlayList';
import { ContentTitle } from '../../../../../../main/components/Main/MainCentralBlock/CentralBlockContent/CentralBlockContentComponents/ContentTitle';
import { PlaylistTitleAlbum } from '../../../../../../main/components/Main/MainCentralBlock/CentralBlockContent/CentralBlockContentComponents/PlaylistTitleAlbum';
import { PlaylistTitleAuthor } from '../../../../../../main/components/Main/MainCentralBlock/CentralBlockContent/CentralBlockContentComponents/PlaylistTitleAuthor';
import { PlaylistTitleTrack } from '../../../../../../main/components/Main/MainCentralBlock/CentralBlockContent/CentralBlockContentComponents/PlaylistTitleTrack';
import PlaylistItem from './PlaylistItem/PlaylistItem';
import PlaylistTitleTimeIcon from './PlaylistTitleTimeIcon';
import { useState } from 'react';
import { PagesBlock } from '../../../../../../main/components/Main/MainCentralBlock/CentralBlockContent/Pages/PagesBlock';
import { PagesHeading } from '../../../../../../main/components/Main/MainCentralBlock/CentralBlockContent/Pages/PagesHeading';
import { Pages } from '../../../../../../main/components/Main/MainCentralBlock/CentralBlockContent/Pages/Pages';
import { useContext } from 'react';
import ThemeContext from '../../../../../../../themes';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import PlaylistItemSkeleton from '../../../../../../main/components/Main/MainCentralBlock/CentralBlockContent/PlaylistItemSkeleton/PlaylistItemSkeleton';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useGetPlaylistQuery } from '../../../../../../../redux/AuthorizationGetTracks/tracksApi';
import { useDispatch } from 'react-redux';
import { getPlaylist } from '../../../../../../../redux/getPlaylistTracks/getPlaylistTracksSlice';
function CentralBlockContent() {
    const navigate = useNavigate()
    const { id } = useParams()
    const {data} = useGetPlaylistQuery(id)
    const [playlistTracks, setPlaylistTracks] = useState(false)
    const playlistTracksData = useSelector(state => state.getPlaylist[0])
    const dispatch = useDispatch();


    useEffect(() => {
        if(data) {
            dispatch(getPlaylist([...data.items]));
        }
    },[data])
        

    useEffect(() => {
        if(playlistTracksData.length) {
            setPlaylistTracks(playlistTracksData)
        }
    },[playlistTracksData])
   
    

 
    const [page, setPage] = useState(1)
    const {themeMode} = useContext(ThemeContext)

   


    useEffect(() => {
        if(navigate) {
           
            setPlaylistTracks(playlistTracksData)
          
        }
    },[navigate])

   

    if (!playlistTracksData.length) {
        const array = [1,2,3,4,5,6,7,8]

        return array.map((element) => {
        return <PlaylistItemSkeleton key={element} />
    })
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
            {(page === 1 && playlistTracks)
                        ? 
                           
                            playlistTracks
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

                    {(page === 2 && playlistTracks)
                        ? playlistTracks
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
