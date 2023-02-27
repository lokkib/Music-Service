import { Track } from './Track';

export type isPlayingState = {
    isPlaying: boolean;
    isPlaying2: boolean;
    tracksPlayed: Track[];
    dataOfTrack: {
        author: string;
        album: string;
        id: string;
    };
    src: string;
};
