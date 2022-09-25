import { useRef } from 'react';
import { useEffect } from 'react';

function Duration({ duration, currentTime }) {
    const refProgress = useRef(null);

    useEffect(() => {
        refProgress.value = currentTime;
    });

    return (
        <>
            <progress
                ref={refProgress}
                value={currentTime}
                max={duration * 60}
            ></progress>
        </>
    );
}

export default Duration;
