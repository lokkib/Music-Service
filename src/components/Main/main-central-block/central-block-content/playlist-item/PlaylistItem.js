import PlaylistTrack from './playlist-track/PlaylistTrack';

function PlaylistItem({ cls = 'playlist__item' }) {
    return (
        <div className={cls}>
            <PlaylistTrack />
        </div>
    );
}

export default PlaylistItem;
