import { useContext } from 'react';

import Navigation from '../../../components/Navigation/Navigation';
import ThemeContext from '../../../themes';
import MainCentralBlock from './MainCentralBlock/MainCentralBlock';
import MainSidebar from './MainSidebar/MainSidebar';
import { StyledMainWrapper } from './StyledMainWrapper';

const MainContent = () => {
    const { themeMode } = useContext(ThemeContext);

    return (
        <StyledMainWrapper style={themeMode.main}>
            <Navigation />
            <MainCentralBlock />
            <MainSidebar />
        </StyledMainWrapper>
    );
};

export default MainContent;
