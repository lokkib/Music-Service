import MainCentralBlock from './MainCentralBlock/MainCentralBlock';
import MainNav from './MainNav/MainNav';
import MainSidebar from './MainSidebar/MainSidebar';
import './Main.scss';

function Main() {
    return (
        <main className="main">
            <MainNav />
            <MainCentralBlock />
            <MainSidebar />
        </main>
    );
}

export default Main;
