import { StyledBurgerLine } from './StyledBurgerLine';
import { useContext } from 'react';
import ThemeContext from '../../../../../../../../themes';

function BurgerLine() {
    const { themeMode } = useContext(ThemeContext);
    return <StyledBurgerLine style={themeMode.burgerLine} />;
}

export default BurgerLine;
