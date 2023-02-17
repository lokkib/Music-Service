import { Line } from 'rc-progress';
import { useContext } from 'react';
import { useSelector } from 'react-redux';

import ThemeContext from '../../../../../themes';

const ProgressLine = () => {
    const { themeMode } = useContext(ThemeContext);
    const value = useSelector((state) => state.volume.progress.value);
    const max = useSelector((state) => state.volume.progress.max);
    const finalValue = useSelector((state) => state.volume.progress.finalValue);

    return (
        <Line
            percent={!value ? 0 : (value / max) * 100 || finalValue}
            width="100%"
            height="5px"
            strokeLinecap="square"
            trailColor={themeMode.progress.trailColor}
            strokeColor="purple"
        />
    );
};

export default ProgressLine;
