import { useSelector } from 'react-redux';

import { GlobalStyle } from './GlobalStyle';
import { AppRoutes } from './routes/Approutes';

const App = () => {
    const theme = useSelector((state) => state.theme.darkTheme);

    return (
        <>
            <GlobalStyle theme={theme} />

            <AppRoutes />
        </>
    );
};

export default App;
