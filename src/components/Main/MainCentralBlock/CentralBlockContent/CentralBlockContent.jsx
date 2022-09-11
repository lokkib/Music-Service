import PlaylistItem from './PlaylistItem/PlaylistItem';

import PlaylistTitleTimeIcon from './PlaylistTitleTimeIcon';
import * as S from './StyledCentralBlockContent'

function CentralBlockContent() {
    return (
        <>
        <S.ContentTitle>
            <S.PlaylistTitleTrack>Трек</S.PlaylistTitleTrack>
        {/* <div className="playlist-title__col col01">Трек</div> */}
        <S.PlaylistTitleAuthor>Исполнитель</S.PlaylistTitleAuthor>
                {/* <div className="playlist-title__col col02">Исполнитель</div> */}
                <S.PlaylistTitleAlbum>Альбом</S.PlaylistTitleAlbum>
                {/* <div className="playlist-title__col col03">Альбом</div> */}
                <div>
                    <PlaylistTitleTimeIcon
                    ></PlaylistTitleTimeIcon>
                </div>

        </S.ContentTitle>
            {/* <div className="content__title playlist-title">
              
            </div> */}
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
