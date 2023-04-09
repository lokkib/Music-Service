
import { TrackTimeText } from './components/TrackTimeText';
import { TrackTimeProps } from '../../../../@types/props/TrackTimeProps';
import { useAddTracktoFavouriteMutation } from '../../../../redux/api/tracksApi';

import PlayIconLike from '../../../Bar/BarContent/BarPlayerBlock/BarPlayerPlayer/PlayerTrackPlay/TrackPlayLikeDislike/TrackPlayLikeDislikeIcons/StyledPlayIconLike';

const TrackTime = ({ duration, id }: TrackTimeProps) => {
    const [addingFavourite] = useAddTracktoFavouriteMutation();

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
                <PlayIconLike />
            </div>

            <TrackTimeText>{(duration / 60).toFixed(2)}</TrackTimeText>
        </div>
    );
};

export default TrackTime;
