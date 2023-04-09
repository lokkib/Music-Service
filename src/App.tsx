import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
import { getCookie, setCookie } from 'cookies-next';
import { GlobalStyle } from './GlobalStyle';
import { AppRoutes } from './routes/Approutes';
import { checkToken } from './redux/slices/checkingTokenSlice';
import { useRefreshTokenMutation } from './redux/api/tracksApi';
import ThemeContext, { themes } from './themes';
import { DarkTheme, BarVisibility } from './@types/themes/GlobalContext';

type MyToken = {
    name: string;
    exp: number;
};

const App = () => {
    const isLoggedIn = sessionStorage.getItem('Auth');
    const [gettingNewToken] = useRefreshTokenMutation();
    const dispatch = useDispatch();

    const [themeMode, setThemeMode] = useState<DarkTheme>(themes.darkTheme);

    const [visibilityBar, setVisibility] = useState<BarVisibility>(
        themes.barVisibility.hidden
    );

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
        <ThemeContext.Provider
            value={{
                themeMode,
                setThemeMode,
                visibilityBar,
                setVisibility,
            }}
        >
            <GlobalStyle />

            <AppRoutes />
        </ThemeContext.Provider>
    );
};

export default App;
