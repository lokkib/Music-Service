import './PlaylistTitleTime.scss';

function PlaylistTitleTimeIcon({ className, alt }) {
    return (
        <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            alt={alt}
        >
            <circle cx="6" cy="6" r="5.5" stroke="#696969" />
            <path d="M4 6H6.5V2.5" stroke="#696969" />
        </svg>
    );
}

export default PlaylistTitleTimeIcon;
