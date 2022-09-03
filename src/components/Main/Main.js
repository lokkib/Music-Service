import MainCentralBlock from './main-central-block/MainCentralBlock';
import MainNav from './main-nav/MainNav';
import MainSidebar from './main-sidebar/MainSidebar';

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
