import { useContext } from 'react';

import ThemeContext from '../../../../themes';
import MainNav from '../../../playlists/playlistComponents/components/Main/MainNav/MainNav';
import MainCentralBlock from './MainCentralBlock/MainCentralBlock';
import { StyledMain } from './StyledMain';
function Main() {
    const { themeMode } = useContext(ThemeContext);
    return (
        <StyledMain style={themeMode.main}>
            <MainNav />
            <MainCentralBlock />
        </StyledMain>
    );
}

export default Main;
