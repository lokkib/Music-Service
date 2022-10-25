import PlaylistItem from './PlaylistItem/PlaylistItem';
import PlaylistTitleTimeIcon from './PlaylistTitleTimeIcon';
import * as S from './StyledCentralBlockContent';

function CentralBlockContent() {
    return (
        <>
            <S.ContentTitle>
                <S.PlaylistTitleTrack>Трек</S.PlaylistTitleTrack>

                <S.PlaylistTitleAuthor>Исполнитель</S.PlaylistTitleAuthor>

                <S.PlaylistTitleAlbum>Альбом</S.PlaylistTitleAlbum>

                <div>
                    <PlaylistTitleTimeIcon></PlaylistTitleTimeIcon>
                </div>
            </S.ContentTitle>

            <S.ContentPlaylist>
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
            </S.ContentPlaylist>
        </>
    );
}

export default CentralBlockContent;
