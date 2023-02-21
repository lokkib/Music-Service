import BurgerLine from './BurgerLine/BurgerLine';
import { NavBurgerBlock } from './NavBurgerBlock';
import { NavBurgerProps } from '../../../@types/props/NavBurgerProps';

const NavBurger = ({ showMenuOnClick }: NavBurgerProps) => (
    <NavBurgerBlock onClick={showMenuOnClick}>
        <BurgerLine />
        <BurgerLine />
        <BurgerLine />
    </NavBurgerBlock>
);

export default NavBurger;
