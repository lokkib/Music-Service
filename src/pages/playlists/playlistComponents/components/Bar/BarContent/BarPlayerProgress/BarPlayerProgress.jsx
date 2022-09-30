import { StyledBarPlayerProgress } from './StyledBarPlayerProgress';
import { useContext } from 'react';
import ThemeContext from '../../../../../../../themes';

function BarPlayerProgress() {
    const {theme3} = useContext(ThemeContext);
    return <StyledBarPlayerProgress style={theme3} />;
}

export default BarPlayerProgress;
