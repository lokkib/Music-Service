import { getCookie, setCookie } from 'cookies-next';
import jwt_decode from 'jwt-decode';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { useRefreshTokenMutation } from '../../redux/AuthorizationGetTracks/tracksApi';
import { checkToken } from '../../redux/checkingToken/checkingTokenSlice';
import { setPlay } from '../../redux/playTrack/playTrackSlice';
import { setPlay2 } from '../../redux/playTrack/playTrackSlice';
import ThemeContext from '../../themes';
import { themes } from '../../themes';
import Bar from '../playlists/playlistComponents/components/Bar/Bar';
import Main from './components/Main/Main';
const MyTracks = () => {
    const [themeMode, setThemeMode] = useState(themes.darkTheme);
    const [visibilityBar, setVisibility] = useState(
        themes.barVisibility.hidden
    );
    const dispatch = useDispatch();
    const [gettingNewToken] = useRefreshTokenMutation();
    const navigate = useNavigate();

    useEffect(() => {
        if (navigate) {
            dispatch(setPlay(false));
            dispatch(setPlay2(true));
        }
    }, [navigate]);

    useEffect(() => {
        let timer = setInterval(() => {
            const token = getCookie('access');
            let decodedToken = jwt_decode(token);
            let dateNow = new Date();
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
                <Main />
                <Bar />
            </div>
        </ThemeContext.Provider>
    );
};

export default MyTracks;
