import BurgerLine from './burger-line/BurgerLine';

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
