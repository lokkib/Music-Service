import BarPlayerProgress from './BarPlayerProgress/BarPlayerProgress';
import BarPlayerBlock from './BarPlayerBlock/BarPlayerBlock';
import { useState } from 'react';


function BarContent() {
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

    function getValues(duration, currentTime) {
        setDuration(duration);
        setCurrentTime(currentTime);
    }

    return (
        <>
            <BarPlayerProgress currentTime={currentTime} duration={duration} />
            <BarPlayerBlock getValues={getValues} />
        </>
    );
}

export default BarContent;
