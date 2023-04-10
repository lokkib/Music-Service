import { useSelector } from 'react-redux';

import { useEffect, useState } from 'react';
import {
    useAddTracktoFavouriteMutation,
    useDeleteTrackFromFavouriteMutation,
    useGetFavouriteTracksQuery,
} from '../../../../../../../redux/api/tracksApi';
import { TrackPlayDislikeContainer } from './TrackPlayerLikeDislikeContainers/TrackPlayDislikeContainer';
import { TrackPlayLikeDislikeContainer } from './TrackPlayerLikeDislikeContainers/TrackPlayerLikeDislikeContainer';
import { TrackPlayLikeContainer } from './TrackPlayerLikeDislikeContainers/TrackPlayLikeContainer';
import { PlayIconDislike } from './TrackPlayLikeDislikeIcons/StyledPlayIconDislike';
import PlayIconLike from './TrackPlayLikeDislikeIcons/StyledPlayIconLike';
import { RootState } from '../../../../../../../redux/store';

const TrackPlayLikeDislike = () => {
    const { data } = useGetFavouriteTracksQuery();
    const [favouriteIds, setFavouriteIds] = useState<number[]>([]);

    const [iconColor, setColorIcon] = useState('none');
    const [addingFavourite] = useAddTracktoFavouriteMutation();

    const id = useSelector((state: RootState) => state.playing.dataOfTrack.id);
    const [deleteFromFavourite] = useDeleteTrackFromFavouriteMutation();

    useEffect(() => {
        if (data) {
            const favoriteId = data.map((el) => el.id);
            setFavouriteIds(favoriteId);
        }
    }, [data]);

    useEffect(() => {
        if (favouriteIds.length) {
            if (favouriteIds.includes(+id)) {
                setColorIcon('#696969');
            }
        }
    }, [favouriteIds]);

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
                <PlayIconLike iconColor={iconColor} />
            </TrackPlayLikeContainer>

            <TrackPlayDislikeContainer onClick={deleteTrackFromFavourite}>
                <PlayIconDislike />
            </TrackPlayDislikeContainer>
        </TrackPlayLikeDislikeContainer>
    );
};

export default TrackPlayLikeDislike;
