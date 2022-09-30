import { StyledBurgerLine } from './StyledBurgerLine';
import { useContext } from 'react';
import ThemeContext from '../../../../../../../../themes';

function BurgerLine() {
    const {theme5} = useContext(ThemeContext);
    return <StyledBurgerLine style={theme5} />;
}

export default BurgerLine;
