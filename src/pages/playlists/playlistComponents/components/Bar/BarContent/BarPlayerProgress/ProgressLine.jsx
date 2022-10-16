import { Line } from 'rc-progress';
import ThemeContext from '../../../../../../../themes';
import { useContext } from 'react';

function ProgressLine({ value, max }) {
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
