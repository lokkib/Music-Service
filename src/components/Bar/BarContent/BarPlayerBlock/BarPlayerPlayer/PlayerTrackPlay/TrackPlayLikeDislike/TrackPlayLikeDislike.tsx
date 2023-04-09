import { useSelector } from 'react-redux';

import {
    useAddTracktoFavouriteMutation,
    useDeleteTrackFromFavouriteMutation,
} from '../../../../../../../redux/api/tracksApi';
import { TrackPlayDislikeContainer } from './TrackPlayerLikeDislikeContainers/TrackPlayDislikeContainer';
import { TrackPlayLikeDislikeContainer } from './TrackPlayerLikeDislikeContainers/TrackPlayerLikeDislikeContainer';
import { TrackPlayLikeContainer } from './TrackPlayerLikeDislikeContainers/TrackPlayLikeContainer';
import { PlayIconDislike } from './TrackPlayLikeDislikeIcons/StyledPlayIconDislike';
import PlayIconLike from './TrackPlayLikeDislikeIcons/StyledPlayIconLike';
import { RootState } from '../../../../../../../redux/store';

const TrackPlayLikeDislike = () => {
    const [addingFavourite] = useAddTracktoFavouriteMutation();

    const id = useSelector((state: RootState) => state.playing.dataOfTrack.id);
    const [deleteFromFavourite] = useDeleteTrackFromFavouriteMutation();

    const addTrackToFavourite = async () => {
        await addingFavourite({
            id,
        })
            .unwrap()

            .catch((error) => {
                throw new Error(error);
            });
    };

    const deleteTrackFromFavourite = async () => {
        await deleteFromFavourite({
            id,
        })
            .unwrap()

            .catch((error) => {
                throw new Error(error);
            });
    };

    return (
        <TrackPlayLikeDislikeContainer>
            <TrackPlayLikeContainer onClick={addTrackToFavourite}>
                <PlayIconLike />
            </TrackPlayLikeContainer>

            <TrackPlayDislikeContainer onClick={deleteTrackFromFavourite}>
                <PlayIconDislike />
            </TrackPlayDislikeContainer>
        </TrackPlayLikeDislikeContainer>
    );
};

export default TrackPlayLikeDislike;
