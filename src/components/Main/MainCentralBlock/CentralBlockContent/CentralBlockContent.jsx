import PlaylistItem from './PlaylistItem/PlaylistItem';
import './CentralBlockContent.scss';
import PlaylistTitleTimeIcon from './PlaylistTitleTimeIcon';

function CentralBlockContent() {
    return (
        <>
            <div className="content__title playlist-title">
                <div className="playlist-title__col col01">Трек</div>
                <div className="playlist-title__col col02">Исполнитель</div>
                <div className="playlist-title__col col03">Альбом</div>
                <div className="playlist-title__col col04">
                    <PlaylistTitleTimeIcon
                        cls="playlist-title__svg"
                        alt="time"
                    ></PlaylistTitleTimeIcon>
                </div>
            </div>
            <div className="content__playlist playlist">
                <PlaylistItem />
                <PlaylistItem />
                <PlaylistItem />
                <PlaylistItem />
                <PlaylistItem />
                <PlaylistItem />
                <PlaylistItem />
                <PlaylistItem />
                <PlaylistItem />
                <PlaylistItem />
                <PlaylistItem />
            </div>
        </>
    );
}

export default CentralBlockContent;
