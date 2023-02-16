import BurgerLine from './BurgerLine/BurgerLine';
import { NavBurgerBlock } from './NavBurgerBlock';

const NavBurger = ({ handleClick }) => (
    <NavBurgerBlock onClick={handleClick}>
        <BurgerLine />
        <BurgerLine />
        <BurgerLine />
    </NavBurgerBlock>
);

export default NavBurger;
