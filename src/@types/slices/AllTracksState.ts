import { Track } from './Track';
import { ChosenAuthor } from './ChosenAuthor';

export type AllTracksState = {
    allTracks: Track[];
    toggledAuthorTracks: Track[];
    toggledGenreTracks: {};
    allTracksChosen: false;
    filteredTracksbyName: [];
    renderedTracks: [];
    trackIsPlayed: {};
    myTracks: [];
    myTracksFiltered: [];
    finalAuthorTracksData: Track[] | never[];
};
