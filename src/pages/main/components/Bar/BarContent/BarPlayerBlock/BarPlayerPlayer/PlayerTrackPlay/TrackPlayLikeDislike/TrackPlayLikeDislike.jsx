import { useSelector } from 'react-redux';

import { useAddTracktoFavouriteMutation } from '../../../../../../../../../redux/AuthorizationGetTracks/tracksApi';
import { useDeleteTrackFromFavouriteMutation } from '../../../../../../../../../redux/AuthorizationGetTracks/tracksApi';
import { TrackPlayDislikeContainer } from './TrackPlayerLikeDislikeContainers/TrackPlayDislikeContainer';
import { TrackPlayLikeDislikeContainer } from './TrackPlayerLikeDislikeContainers/TrackPlayerLikeDislikeContainer';
import { TrackPlayLikeContainer } from './TrackPlayerLikeDislikeContainers/TrackPlayLikeContainer';
import { PlayIconDislike } from './TrackPlayLikeDislikeIcons/StyledPlayIconDislike';
import { PlayIconLike } from './TrackPlayLikeDislikeIcons/StyledPlayIconLike';

function TrackPlayLikeDislike() {
    const [addingFavourite] = useAddTracktoFavouriteMutation();

    const id = useSelector((state) => state.playing.dataOfTrack.id);
    const [deleteFromFavourite] = useDeleteTrackFromFavouriteMutation();

    const addTrackToFavourite = async () => {
        await addingFavourite({
            id: id,
        })
            .unwrap()

            .catch((error) => {
                throw new Error(error);
            });
    };

    const deleteTrackFromFavourite = async () => {
        await deleteFromFavourite({
            id: id,
        })
            .unwrap()

            .catch((error) => {
                throw new Error(error);
            });
    };

    return (
        <TrackPlayLikeDislikeContainer>
            <TrackPlayLikeContainer onClick={addTrackToFavourite}>
                <PlayIconLike alt="like" />
            </TrackPlayLikeContainer>

            <TrackPlayDislikeContainer onClick={deleteTrackFromFavourite}>
                <PlayIconDislike alt="dislike" />
            </TrackPlayDislikeContainer>
        </TrackPlayLikeDislikeContainer>
    );
}

export default TrackPlayLikeDislike;
