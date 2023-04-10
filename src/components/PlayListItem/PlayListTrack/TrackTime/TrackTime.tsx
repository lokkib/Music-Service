import { useEffect, useState } from 'react';
import { TrackTimeText } from './components/TrackTimeText';
import { TrackTimeProps } from '../../../../@types/props/TrackTimeProps';
import {
    useAddTracktoFavouriteMutation,
    useGetFavouriteTracksQuery,
} from '../../../../redux/api/tracksApi';

import PlayIconLike from '../../../Bar/BarContent/BarPlayerBlock/BarPlayerPlayer/PlayerTrackPlay/TrackPlayLikeDislike/TrackPlayLikeDislikeIcons/StyledPlayIconLike';

const TrackTime = ({ duration, id }: TrackTimeProps) => {
    const [addingFavourite] = useAddTracktoFavouriteMutation();
    const { data } = useGetFavouriteTracksQuery();
    const [favouriteIds, setFavouriteIds] = useState<number[]>([]);

    const [iconColor, setColorIcon] = useState('none');

    useEffect(() => {
        if (data) {
            const favoriteId = data.map((el) => el.id);
            setFavouriteIds(favoriteId);
        }
    }, [data]);

    useEffect(() => {
        if (favouriteIds.length) {
            if (favouriteIds.includes(id)) {
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

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
            className="track__time"
        >
            <div
                tabIndex={0}
                onKeyDown={addTrackToFavourite}
                role="button"
                onClick={addTrackToFavourite}
            >
                <PlayIconLike iconColor={iconColor} />
            </div>

            <TrackTimeText>{(duration / 60).toFixed(2)}</TrackTimeText>
        </div>
    );
};

export default TrackTime;
