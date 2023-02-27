import { Track } from './Track';

export type AllTracksState = {
    allTracks: Track[];
    toggledAuthorTracks: {
        performer: string;
        content?: Track;
        chosen: boolean;
    }[];
    finalGenreTracks: Track[];
    filteredTracksbyName: Track[];
    renderedTracks: Track[];
    trackIsPlayed: number;
    myTracks: Track[];
    myTracksFiltered: Track[];
    finalAuthorTracksData: Track[];
    filterAuthorsValue: string[];
    filteredByAuthor: boolean;
    filterGenreValue: string[];
    allGenresChosen: string;
};
