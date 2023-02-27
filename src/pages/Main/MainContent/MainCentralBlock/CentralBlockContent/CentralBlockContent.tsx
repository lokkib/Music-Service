import { useState, useContext, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

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
import { RootState } from '../../../../../redux/store';
import { Track } from '../../../../../@types/slices/Track';

const CentralBlockContent = () => {
    const AuthorsChosen = useSelector(
        (state: RootState) => state.storeTracks.filterAuthorsValue
    );

    const GenresChosen = useSelector(
        (state: RootState) => state.storeTracks.filterGenreValue
    );

    const chosenAuthorTracks = useSelector(
        (state: RootState) => state.storeTracks.finalAuthorTracksData
    );

    const chosenGenreTracks = useSelector(
        (state: RootState) => state.storeTracks.finalGenreTracks
    );

    const renderedTracks = useSelector(
        (state: RootState) => state.storeTracks.renderedTracks
    );

    const sortedTracks = useSelector(
        (state: RootState) =>
            state.orderOfTracksPlaying.shuffleTracks.sortedRenderedTracks
    );
    const chosenTracksbyName = useSelector(
        (state: RootState) => state.storeTracks.filteredTracksbyName
    );

    const [finalChosenTracksGenreData, setFinalChosenTracksGenreData] =
        useState<Track[] | boolean>(false);
    const [page, setPage] = useState(1);

    const [allTracks, setAllTracks] = useState<Track[] | undefined>(undefined);
    const [sortedTracksData, setSortedTracks] = useState<Track[] | boolean>(
        false
    );
    const [filteredTracksData, setFilteredTRacksData] = useState<
        Track[] | boolean
    >(false);
    const [filteredTracksbyName, setFilteredTracksName] = useState<
        Track[] | boolean
    >(false);
    const [filteredTracksAuthorData, setFilteredAuthorTracks] = useState<
        Track[] | boolean
    >(false);
    const { data, isLoading } = useGetAllTracksQuery();
    const { themeMode } = useContext(ThemeContext);

    const dispatch = useDispatch();
    const oldTracksFirstClicked = useSelector(
        (state: RootState) =>
            state.filterYear.filterTracks.oldTracksFirstClicked
    );
    const newTracksFirstClicked = useSelector(
        (state: RootState) =>
            state.filterYear.filterTracks.newTracksFirstClicked
    );

    useEffect(() => {
        if (data && AuthorsChosen.includes('Все исполнители')) {
            setAllTracks(data);
            setFilteredTRacksData(false);
            setFilteredAuthorTracks(false);
            setFinalChosenTracksGenreData(false);
            setFilteredTracksName(false);
            setSortedTracks(false);
        }
    }, [AuthorsChosen, data]);

    useEffect(() => {
        if (data && GenresChosen.includes('Все жанры')) {
            setAllTracks(data);
            setFilteredTRacksData(false);
            setFilteredAuthorTracks(false);
            setFinalChosenTracksGenreData(false);
            setFilteredTracksName(false);
            setSortedTracks(false);
        }
    }, [GenresChosen, data]);

    useEffect(() => {
        if (data) {
            dispatch(storeAllTracks(data));
            setAllTracks(data);
        }
    }, [data, allTracks]);

    useEffect(() => {
        if (oldTracksFirstClicked && data) {
            const data2 = [...data];
            setFilteredTRacksData(
                data2.sort(
                    (a, b) =>
                        +new Date(a.release_date) - +new Date(b.release_date)
                )
            );
            setFilteredAuthorTracks(false);
            setFinalChosenTracksGenreData(false);
            setFilteredTracksName(false);
            setSortedTracks(false);
            setAllTracks(undefined);
        }

        if (newTracksFirstClicked && data) {
            const data2 = [...data];
            setFilteredTRacksData(
                data2.sort(
                    (a, b) =>
                        +new Date(b.release_date) - +new Date(a.release_date)
                )
            );
            setFilteredAuthorTracks(false);
            setFinalChosenTracksGenreData(false);
            setFilteredTracksName(false);
            setSortedTracks(false);
            setAllTracks(undefined);
        }
    }, [oldTracksFirstClicked, newTracksFirstClicked]);

    useEffect(() => {
        if (data && chosenAuthorTracks.length) {
            setFilteredTRacksData(false);
            setFilteredAuthorTracks(chosenAuthorTracks);
            setFinalChosenTracksGenreData(false);
            setFilteredTracksName(false);
            setSortedTracks(false);
        }
    }, [chosenAuthorTracks]);

    useEffect(() => {
        if (data && allTracks && !chosenAuthorTracks) {
            setAllTracks(data);
            setFilteredTRacksData(false);
            setFilteredAuthorTracks(false);
            setFinalChosenTracksGenreData(false);
            setFilteredTracksName(false);
            setSortedTracks(false);
        }
    }, [allTracks, chosenAuthorTracks]);

    useEffect(() => {
        if (data && chosenGenreTracks) {
            setAllTracks(undefined);
            setFilteredTRacksData(false);
            setFilteredAuthorTracks(false);
            setFilteredTracksName(false);
            setSortedTracks(false);

            const array: Track[] = [];
            for (const element of chosenGenreTracks) {
                array.push(element);
            }
            setFinalChosenTracksGenreData(array);
        }
    }, [chosenGenreTracks]);

    useEffect(() => {
        if (data && chosenTracksbyName) {
            setAllTracks(undefined);
            setFilteredTracksName(chosenTracksbyName);
            setFilteredTRacksData(false);
            setFilteredAuthorTracks(false);
            setFinalChosenTracksGenreData(false);
            setSortedTracks(false);
        }
    }, [chosenTracksbyName]);

    useEffect(() => {
        if (data && sortedTracks.length) {
            setAllTracks(undefined);
            setFilteredTracksName(false);
            setFilteredTRacksData(false);
            setFilteredAuthorTracks(false);
            setFinalChosenTracksGenreData(false);
            setSortedTracks(sortedTracks);
        }
    }, [sortedTracks]);

    useEffect(() => {
        dispatch(
            holdRenderedTracks(
                sortedTracksData ||
                    filteredTracksbyName ||
                    finalChosenTracksGenreData ||
                    filteredTracksAuthorData ||
                    filteredTracksData ||
                    allTracks
            )
        );
    }, [
        filteredTracksbyName,
        finalChosenTracksGenreData,
        filteredTracksData,
        filteredTracksAuthorData,
        allTracks,
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
                {page === 1 && renderedTracks && renderedTracks.length
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

                {page === 2 && renderedTracks && renderedTracks.length
                    ? renderedTracks
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

                {page === 3 && renderedTracks && renderedTracks.length
                    ? renderedTracks
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

                {page === 4 && renderedTracks && renderedTracks.length
                    ? renderedTracks
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
