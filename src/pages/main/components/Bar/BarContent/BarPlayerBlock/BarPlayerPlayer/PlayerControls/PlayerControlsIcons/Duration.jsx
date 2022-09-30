import { useRef } from 'react';
import { useEffect } from 'react';

function Duration(currentTime, duration) {
    const refProgress = useRef(null);

    useEffect(() => {
        refProgress.value = currentTime;
    });

    return (
        <>
            <progress
                ref={refProgress}
                value={currentTime}
                max={duration}
            ></progress>
        </>
    );
}

export default Duration;
