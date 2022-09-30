import BarContent from './BarContent/BarContent';

import { StyledBar } from './StyledBar';
import { useContext } from 'react';
import ThemeContext from '../../../../themes';


function Bar() {
    const {theme2} = useContext(ThemeContext);
    const {theme3} = useContext(ThemeContext);
    return (
        <StyledBar style={theme2}>
            <BarContent style={theme3} />
        </StyledBar>
    );
}

export default Bar;
