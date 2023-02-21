import { useState, useContext, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { useGetAllTracksQuery } from '../../../../../redux/api/tracksApi';
import {
    storeAllTracks,
    holdRenderedTracks,
} from '../../../../../redux/slices/storingAllTracksSlice';
import ThemeContext from '../../../../../themes';
import { ContentPlaylist } from '../../../../../components/ContentPlaylist/ContentPlaylist';
import { ContentTitleBlock } from '../../../../../components/ContentTitleBlock/ContentTitleBlock';
import { PlaylistTitleAlbum } from '../../../../../components/ContentTitleBlock/PlaylistTitleAlbum';
import { PlaylistTitleAuthor } from '../../../../../components/ContentTitleBlock/PlayistTitleAuthor';
import { PlaylistTitleTrack } from '../../../../../components/ContentTitleBlock/PlayListTitleTrack';
import { Pages } from '../../../../../components/PagesBlock/Pages';
import { PagesBlock } from '../../../../../components/PagesBlock/PagesBlock';
import { PagesHeading } from '../../../../../components/PagesBlock/PagesHeading';
import PlaylistItem from '../../../../../components/PlayListItem/PlayListItem';
import PlaylistItemSkeleton from '../../../../../components/PlaylistItemSkeleton/PlaylistItemSkeleton';
import PlaylistTitleTimeIcon from '../../../../../components/ContentTitleBlock/PlaylistTitleTimeIcon';

const CentralBlockContent = () => {
    const navigate = useNavigate();

    const chosenAuthorTracks = useSelector(
        (state) => state.storeTracks.finalAuthorTracksData
    );

    const chosenGenreTracks = useSelector(
        (state) => state.storeTracks.finaltoggledGenreTracksArray
    );

    const sortedTracks = useSelector(
        (state) => state.orderOfTracksPlaying.shuffleTracks.sortedRenderedTracks
    );
    const chosenTracksbyName = useSelector(
        (state) => state.storeTracks.filteredTracksbyName
    );

    const [finalChosenTracksGenreData, setFinalChosenTracksGenreData] =
        useState(false);
    const [page, setPage] = useState(1);

    const [sortedTracksData, setSortedTracks] = useState(false);
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

    const allTracksData = useSelector((state) => state.storeTracks.allTracks);

    useEffect(() => {
        dispatch(storeAllTracks(data));
    }, [data, allTracksData]);

    useEffect(() => {
        if (oldTracksFirstClicked && data) {
            const data2 = [...data];
            setFilteredTRacksData(
                data2.sort(
                    (a, b) =>
                        new Date(a.release_date) - new Date(b.release_date)
                )
            );
            setFilteredAuthorTracks(false);
            setFinalChosenTracksGenreData(false);
            setFilteredTRacksName(false);
            setSortedTracks(false);
        }

        if (newTracksFirstClicked && data) {
            const data2 = [...data];
            setFilteredTRacksData(
                data2.sort(
                    (a, b) =>
                        new Date(b.release_date) - new Date(a.release_date)
                )
            );
            setFilteredAuthorTracks(false);
            setFinalChosenTracksGenreData(false);
            setFilteredTRacksName(false);
            setSortedTracks(false);
        }
    }, [oldTracksFirstClicked, newTracksFirstClicked]);

    useEffect(() => {
        if (data && chosenAuthorTracks.length) {
            setFilteredTRacksData(false);
            setFilteredAuthorTracks(chosenAuthorTracks);
            setFinalChosenTracksGenreData(false);
            setFilteredTRacksName(false);
            setSortedTracks(false);
        }
    }, [chosenAuthorTracks]);

    useEffect(() => {
        if (data && allTracksChosen) {
            setFilteredTRacksData(false);
            setFilteredAuthorTracks(false);
            setFinalChosenTracksGenreData(false);
            setFilteredTRacksName(false);
            setSortedTracks(false);
        }
    }, [allTracksChosen]);

    useEffect(() => {
        if (data && chosenGenreTracks) {
            setFilteredTRacksData(false);
            setFilteredAuthorTracks(false);
            setFilteredTRacksName(false);
            setSortedTracks(false);

            const array = [];
            for (const element of chosenGenreTracks) {
                array.push(...element);
            }
            setFinalChosenTracksGenreData(array);
        }
    }, [chosenGenreTracks]);

    useEffect(() => {
        if (data && chosenTracksbyName) {
            setFilteredTRacksName(chosenTracksbyName);
            setFilteredTRacksData(false);
            setFilteredAuthorTracks(false);
            setFinalChosenTracksGenreData(false);
            setSortedTracks(false);
        }
    }, [chosenTracksbyName]);

    useEffect(() => {
        if (data && sortedTracks.length) {
            setFilteredTRacksName(false);
            setFilteredTRacksData(false);
            setFilteredAuthorTracks(false);
            setFinalChosenTracksGenreData(false);
            setSortedTracks(sortedTracks);
        }
    }, [sortedTracks]);

    useEffect(() => {
        if (navigate) {
            setSortedTracks(false);
            setFilteredTRacksName(false);
            setFilteredTRacksData(false);
            setFilteredAuthorTracks(false);
            setFinalChosenTracksGenreData(false);
        }
    }, [navigate]);

    useEffect(() => {
        dispatch(
            holdRenderedTracks(
                sortedTracksData ||
                    filteredTracksbyName ||
                    finalChosenTracksGenreData ||
                    filteredTracksAuthorData ||
                    filteredTracksData ||
                    allTracksData
            )
        );
    }, [
        filteredTracksbyName,
        finalChosenTracksGenreData,
        filteredTracksData,
        filteredTracksAuthorData,
        allTracksData,
        sortedTracksData,
    ]);

    if (isLoading) {
        const array = [1, 2, 3, 4, 5, 6, 7, 8];

        return (
            <>
                {array.map((el) => (
                    <PlaylistItemSkeleton key={el} />
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
                    ? (
                          sortedTracksData ||
                          filteredTracksbyName ||
                          finalChosenTracksGenreData ||
                          filteredTracksData ||
                          filteredTracksAuthorData ||
                          data
                      )
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
                    ? (
                          sortedTracksData ||
                          filteredTracksbyName ||
                          finalChosenTracksGenreData ||
                          filteredTracksData ||
                          filteredTracksData ||
                          data
                      )
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

                {page === 3
                    ? (
                          sortedTracksData ||
                          filteredTracksbyName ||
                          finalChosenTracksGenreData ||
                          filteredTracksData ||
                          filteredTracksData ||
                          data
                      )
                          .slice(16, 24)
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

                {page === 4
                    ? (
                          sortedTracksData ||
                          filteredTracksbyName ||
                          finalChosenTracksGenreData ||
                          filteredTracksData ||
                          filteredTracksData ||
                          data
                      )
                          .slice(24, 29)
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
