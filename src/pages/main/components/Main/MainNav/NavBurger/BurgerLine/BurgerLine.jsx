import { useContext } from 'react';

import ThemeContext from '../../../../../../../themes';
import { StyledBurgerLine } from './StyledBurgerLine';

function BurgerLine() {
    const { themeMode } = useContext(ThemeContext);
    return <StyledBurgerLine style={themeMode.burgerLine} />;
}

export default BurgerLine;
