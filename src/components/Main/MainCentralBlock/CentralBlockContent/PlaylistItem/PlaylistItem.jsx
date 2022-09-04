import PlaylistTrack from './PlaylistTrack/PlaylistTrack';
import './PlaylistItem.scss';

function PlaylistItem({ cls = 'playlist__item' }) {
    return (
        <div className={cls}>
            <PlaylistTrack />
        </div>
    );
}

export default PlaylistItem;
