import { Track } from './Track';

export type AllTracksState = {
    allTracks: Track[];
    finalGenreTracks: Track[];
    filteredTracksbyName: Track[];
    renderedTracks: Track[] | boolean;
    trackIsPlayed: number;
    myTracks: Track[];
    myTracksFiltered: Track[];
    finalAuthorTracksData: Track[];
    filterAuthorsValue: string[];
    filteredByAuthor: boolean;
    filterGenreValue: string[];
    allGenresChosen: string;
};
