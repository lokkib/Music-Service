import { getCookie, setCookie } from 'cookies-next';
import jwt_decode from 'jwt-decode';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { useRefreshTokenMutation } from '../../redux/AuthorizationGetTracks/tracksApi';
import { checkToken } from '../../redux/checkingToken/checkingTokenSlice';
import { setPlay, setPlay2 } from '../../redux/playTrack/playTrackSlice';
import ThemeContext, { themes } from '../../themes';
import Bar from '../../components/Bar/Bar';
import MainContent from './MainContent/MainContent';

const PlaylistPage = () => {
    const [themeMode, setThemeMode] = useState(themes.darkTheme);
    const [visibilityBar, setVisibility] = useState(
        themes.barVisibility.hidden
    );
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [gettingNewToken] = useRefreshTokenMutation();

    useEffect(() => {
        if (navigate) {
            dispatch(setPlay(false));
            dispatch(setPlay2(true));
        }
    }, [navigate]);

    useEffect(() => {
        const timer = setInterval(() => {
            const token = getCookie('access');
            const decodedToken = jwt_decode(token);
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
            <div className="container">
                <MainContent />
                <Bar />
            </div>
        </ThemeContext.Provider>
    );
};

export default PlaylistPage;
