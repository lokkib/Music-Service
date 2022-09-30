import { forwardRef } from 'react';

const Audio = forwardRef((props, ref) => {
    return (
        <audio
            data-d={props}
            ref={ref}
            style={{ display: 'none' }}
            controls
            src="/music/Bobby_Marleni_-_Dropin.mp3"
        ></audio>
    );
});

export default Audio;
