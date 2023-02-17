import { useSelector } from 'react-redux';

import { GlobalStyle } from './GlobalStyle';
import { AppRoutes } from './routes/Approutes';
import { RootState } from './redux/store';

const App = () => {
    const theme = useSelector((state: RootState) => state.theme.darkTheme);

    return (
        <>
            <GlobalStyle theme={theme} />

            <AppRoutes />
        </>
    );
};

export default App;
