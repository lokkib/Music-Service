import { useContext } from 'react';

import ThemeContext from '../../../../../themes';
import BarContent from './BarContent/BarContent';
import { StyledBar } from './StyledBar';

function Bar() {
    const { themeMode } = useContext(ThemeContext);

    return (
        <StyledBar style={themeMode.bar}>
            <BarContent />
        </StyledBar>
    );
}

export default Bar;
