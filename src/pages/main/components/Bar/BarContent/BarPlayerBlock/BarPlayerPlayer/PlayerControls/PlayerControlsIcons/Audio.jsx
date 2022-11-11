import { forwardRef } from 'react';
import { useSelector } from 'react-redux';

const Audio = forwardRef((props, ref) => {
    const trackfile = useSelector((state) => state.playing.src);

    return (
        <audio
            ref={ref}
            style={{ display: 'none' }}
            controls
            src={trackfile}
        ></audio>
    );
});

export default Audio;
