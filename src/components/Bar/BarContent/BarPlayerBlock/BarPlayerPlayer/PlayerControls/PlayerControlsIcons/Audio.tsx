import { forwardRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../../../redux/store';

const Audio = forwardRef<HTMLAudioElement>((_, ref) => {
    const trackfile = useSelector((state: RootState) => state.playing.src);

    return (
        <audio ref={ref} style={{ display: 'none' }} controls src={trackfile} />
    );
});

export default Audio;
