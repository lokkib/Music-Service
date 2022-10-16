import BarContent from './BarContent/BarContent';

import { StyledBar } from './StyledBar';
import { useContext } from 'react';
import ThemeContext from '../../../../themes';

function Bar() {
    const { themeMode } = useContext(ThemeContext);

    return (
        <StyledBar style={themeMode.bar}>
            <BarContent />
        </StyledBar>
    );
}

export default Bar;
