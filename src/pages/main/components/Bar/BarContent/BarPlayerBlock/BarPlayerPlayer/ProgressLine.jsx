import { useRef } from 'react';

function ProgressLine({ max, value }) {
    const refProgress = useRef(null);

    return (
        <>
            <progress
                color="red"
                style={{
                    width: '100%',
                    height: '5px',
                    backgroundColor: '#2E2E2E',
                }}
                ref={refProgress}
                value={value}
                max={max}
            ></progress>
        </>
    );
}

export default ProgressLine;
