import { Line } from 'rc-progress';

function ProgressLine({ max, value }) {
 

    return (
        <>
            <Line
                percent={!value ? 0 : (value / max) * 100}
                width="100%"
                height="5px"
                strokeLinecap="square"
                trailColor="#2E2E2E"
                strokeColor={'purple'}
            />
        </>
    );
}

export default ProgressLine;
