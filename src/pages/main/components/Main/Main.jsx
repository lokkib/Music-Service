import { useContext } from 'react';

import ThemeContext from '../../../../themes';
import MainCentralBlock from './MainCentralBlock/MainCentralBlock';
import MainNav from './MainNav/MainNav';
import MainSidebar from './MainSidebar/MainSidebar';
import { StyledMain } from './StyledMain';

function Main() {
    const { themeMode } = useContext(ThemeContext);

    return (
        <StyledMain style={themeMode.main}>
            <MainNav />
            <MainCentralBlock />
            <MainSidebar />
        </StyledMain>
    );
}

export default Main;
