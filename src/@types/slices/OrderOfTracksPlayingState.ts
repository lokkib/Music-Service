import { Track } from './Track';

export type OrderOfTracksPlayingState = {
    playingNextTrack: {
        chosenTrack: [];
    };
    playingPreviousTrack: {
        chosenTrack: [];
    };
    shuffleTracks: {
        isButtonPressed: boolean;
        sortedRenderedTracks: Track[];
    };
    repeatTracks: {
        isButtonPressed: boolean;
    };
};
