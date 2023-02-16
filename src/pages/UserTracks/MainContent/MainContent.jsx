import { useContext } from 'react';

import ThemeContext from '../../../themes';
import Navigation from '../../../components/Navigation/Navigation';
import MainCentralBlock from './MainCentralBlock/MainCentralBlock';
import { StyledMainWrapper } from './StyledMainWrapper';

const MainContent = () => {
    const { themeMode } = useContext(ThemeContext);
    return (
        <StyledMainWrapper style={themeMode.main}>
            <Navigation />
            <MainCentralBlock />
        </StyledMainWrapper>
    );
};

export default MainContent;
