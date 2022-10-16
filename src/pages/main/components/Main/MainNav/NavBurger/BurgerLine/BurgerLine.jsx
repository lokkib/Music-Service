import { StyledBurgerLine } from './StyledBurgerLine';

import ThemeContext from '../../../../../../../themes';
import { useContext } from 'react';

function BurgerLine() {
    const { themeMode } = useContext(ThemeContext);
    return <StyledBurgerLine style={themeMode.burgerLine} />;
}

export default BurgerLine;
