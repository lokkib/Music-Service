import { useSelector } from 'react-redux';

import { AppRoutes } from './Approutes';
import { GlobalStyle } from './GlobalStyle';

function App() {
    const theme = useSelector((state) => state.theme.darkTheme);

    return (
        <>
            <GlobalStyle theme={theme} />

            <AppRoutes />
        </>
    );
}

export default App;
