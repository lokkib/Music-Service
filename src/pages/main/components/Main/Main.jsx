import MainCentralBlock from './MainCentralBlock/MainCentralBlock';
import MainNav from './MainNav/MainNav';
import MainSidebar from './MainSidebar/MainSidebar';

import { StyledMain } from './StyledMain';
import { useContext } from 'react';
import ThemeContext from '../../../../themes';

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
