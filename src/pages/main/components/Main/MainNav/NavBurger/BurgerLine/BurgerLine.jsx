import { StyledBurgerLine } from './StyledBurgerLine';

import ThemeContext from '../../../../../../../themes';
import { useContext } from 'react';

function BurgerLine() {
    const {theme5} = useContext(ThemeContext);
    return <StyledBurgerLine style={theme5}  />;
}

export default BurgerLine;
