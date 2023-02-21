import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import { getCookie, setCookie } from 'cookies-next';

import { GlobalStyle } from './GlobalStyle';
import { AppRoutes } from './routes/Approutes';
import { RootState } from './redux/store';
import { checkToken } from './redux/slices/checkingTokenSlice';
import { useRefreshTokenMutation } from './redux/api/tracksApi';

type MyToken = {
    name: string;
    exp: number;
};

const App = () => {
    const theme = useSelector((state: RootState) => state.theme.darkTheme);
    const isLoggedIn = sessionStorage.getItem('Auth');
    const [gettingNewToken] = useRefreshTokenMutation();
    const dispatch = useDispatch();
    useEffect(() => {
        const timer = setInterval(() => {
            if (isLoggedIn) {
                const token = getCookie('access');
                const decodedToken = jwtDecode<MyToken>(token as string);
                const dateNow = new Date();
                if (decodedToken.exp * 1000 < dateNow.getTime()) {
                    dispatch(checkToken(false));
                    const getNewToken = async () => {
                        await gettingNewToken({
                            refresh: getCookie('refresh'),
                        })
                            .unwrap()
                            .then((response) => {
                                setCookie('access', response.access);

                                dispatch(checkToken(true));
                            })
                            .catch((error) => {
                                throw new Error(error);
                            });
                    };
                    getNewToken();
                }
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <>
            <GlobalStyle theme={theme} />

            <AppRoutes />
        </>
    );
};

export default App;
