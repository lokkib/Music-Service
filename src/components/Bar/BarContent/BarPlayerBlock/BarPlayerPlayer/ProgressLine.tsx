import { Line } from 'rc-progress';
import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../redux/store';
import ThemeContext from '../../../../../themes';

const ProgressLine = () => {
    const { themeMode } = useContext(ThemeContext);
    const value = useSelector(
        (state: RootState) => state.volume.progress.value
    );
    const max = useSelector((state: RootState) => state.volume.progress.max);
    const finalValue = useSelector(
        (state: RootState) => state.volume.finalValue
    );

    return (
        <Line
            percent={!value ? 0 : (value / max) * 100 || finalValue}
            height="5px"
            width="100%"
            strokeLinecap="square"
            trailColor={themeMode.progress.trailColor}
            strokeColor="purple"
        />
    );
};

export default ProgressLine;
