import { useContext } from 'react';

import ThemeContext from '../../themes';
import BarContent from './BarContent/BarContent';
import { StyledBar } from './StyledBar';

const Bar = () => {
    const { themeMode } = useContext(ThemeContext);
    const { visibilityBar } = useContext(ThemeContext);
    return (
        <StyledBar style={{ ...themeMode.bar, ...visibilityBar }}>
            <BarContent />
        </StyledBar>
    );
};

export default Bar;
