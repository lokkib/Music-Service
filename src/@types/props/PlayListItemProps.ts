import { Track } from '../slices/Track';

export type PlaylistItemProps = {
    track: Track;
    index: number;
    name: string;
    author: string;
    release_date?: string;
    genre?: string;
    duration: number;
    album: string;
    logo?: null;
    src: string;
    id: number;
};
