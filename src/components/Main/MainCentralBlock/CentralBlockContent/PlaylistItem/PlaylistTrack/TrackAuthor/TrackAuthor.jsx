import './TrackAuthor.scss';

function TrackAuthor({ link = 'http://' }) {
    return (
        <div className="track__author">
            <a className="track__author-link" href={link}>
                #
            </a>
        </div>
    );
}

export default TrackAuthor;
