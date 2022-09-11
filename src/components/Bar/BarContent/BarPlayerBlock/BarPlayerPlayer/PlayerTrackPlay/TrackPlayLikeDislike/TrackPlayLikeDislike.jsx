
import * as S from './StyledTrackPlayLikeDislike';
import * as Styled from './TrackPlayLikeDislikeIcons/StyledPlayIcons'

function TrackPlayLikeDislike() {
    return (
        <S.TrackPlayLikeDislike>
            <S.TrackPlayLike>
           <Styled.PlayIconLike alt='like' />
                    
            

            </S.TrackPlayLike>
{/* <div className="track-play__like _btn-icon"> */}
                
            {/* </div> */}
            <S.TrackPlayDisike>
            <Styled.PlayIconDislike alt='dislike' />
            </S.TrackPlayDisike>
                
           
        </S.TrackPlayLikeDislike>
        
            
      
    );
}

export default TrackPlayLikeDislike;
