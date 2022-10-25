import { Line } from 'rc-progress';
import { useContext } from 'react';

import ThemeContext from '../../../../../../../themes';

function ProgressLine({ max, value }) {
    const { themeMode } = useContext(ThemeContext);
    return (
        <>
            <Line
                percent={!value ? 0 : (value / max) * 100}
                width="100%"
                height="5px"
                strokeLinecap="square"
                trailColor={themeMode.progress.trailColor}
                strokeColor={'purple'}
            />
        </>
    );
}

export default ProgressLine;
