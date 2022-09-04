import BurgerLine from './BurgerLine/BurgerLine';
import './NavBurger.scss';

function NavBurger() {
    return (
        <div className="nav__burger burger">
            <BurgerLine />
            <BurgerLine />
            <BurgerLine />
        </div>
    );
}

export default NavBurger;
