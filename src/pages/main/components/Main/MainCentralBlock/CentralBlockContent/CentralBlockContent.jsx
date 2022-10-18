import { ContentPlaylist } from './CentralBlockContentComponents/ContentPlayList';
import { ContentTitle } from './CentralBlockContentComponents/ContentTitle';
import { PlaylistTitleAlbum } from './CentralBlockContentComponents/PlaylistTitleAlbum';
import { PlaylistTitleAuthor } from './CentralBlockContentComponents/PlaylistTitleAuthor';
import { PlaylistTitleTrack } from './CentralBlockContentComponents/PlaylistTitleTrack';
import PlaylistItem from './PlaylistItem/PlaylistItem';
import PlaylistTitleTimeIcon from './PlaylistTitleTimeIcon';

function CentralBlockContent() {
    return (
        <>
            <ContentTitle>
                <PlaylistTitleTrack>Трек</PlaylistTitleTrack>

                <PlaylistTitleAuthor>Исполнитель</PlaylistTitleAuthor>

                <PlaylistTitleAlbum>Альбом</PlaylistTitleAlbum>

                <div>
                    <PlaylistTitleTimeIcon></PlaylistTitleTimeIcon>
                </div>
            </ContentTitle>

            <ContentPlaylist>
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
            </ContentPlaylist>
        </>
    );
}

export default CentralBlockContent;
