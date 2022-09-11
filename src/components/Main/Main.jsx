import MainCentralBlock from './MainCentralBlock/MainCentralBlock';
import MainNav from './MainNav/MainNav';
import MainSidebar from './MainSidebar/MainSidebar';

import { StyledMain } from './StyledMain';

function Main() {
    return (
        <StyledMain>
            <MainNav />
            <MainCentralBlock />
            <MainSidebar />
        </StyledMain>
        // <main className="main">

        // </main>
    );
}

export default Main;
