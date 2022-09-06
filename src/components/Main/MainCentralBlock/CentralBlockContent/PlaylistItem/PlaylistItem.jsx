import PlaylistTrack from './PlaylistTrack/PlaylistTrack';
import './PlaylistItem.scss';

function PlaylistItem({ className = 'playlist__item' }) {
    return (
        <div className={className}>
            <PlaylistTrack />
        </div>
    );
}

export default PlaylistItem;
