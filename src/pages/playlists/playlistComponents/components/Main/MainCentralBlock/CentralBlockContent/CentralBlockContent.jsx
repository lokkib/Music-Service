import { ContentPlaylist } from '../../../../../../main/components/Main/MainCentralBlock/CentralBlockContent/CentralBlockContentComponents/ContentPlayList';
import { ContentTitle } from '../../../../../../main/components/Main/MainCentralBlock/CentralBlockContent/CentralBlockContentComponents/ContentTitle';
import { PlaylistTitleAlbum } from '../../../../../../main/components/Main/MainCentralBlock/CentralBlockContent/CentralBlockContentComponents/PlaylistTitleAlbum';
import { PlaylistTitleAuthor } from '../../../../../../main/components/Main/MainCentralBlock/CentralBlockContent/CentralBlockContentComponents/PlaylistTitleAuthor';
import { PlaylistTitleTrack } from '../../../../../../main/components/Main/MainCentralBlock/CentralBlockContent/CentralBlockContentComponents/PlaylistTitleTrack';
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
