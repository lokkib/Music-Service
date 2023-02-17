import { getCookie, setCookie } from 'cookies-next';
import jwt_decode from 'jwt-decode';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Bar from '../../components/Bar/Bar';
import { useRefreshTokenMutation } from '../../redux/AuthorizationGetTracks/tracksApi';
import { checkToken } from '../../redux/checkingToken/checkingTokenSlice';
import { setPlay, setPlay2 } from '../../redux/playTrack/playTrackSlice';
import ThemeContext, { themes } from '../../themes';
import MainContent from './MainContent/MainContent';

const MainPage = () => {
    const [themeMode, setThemeMode] = useState(themes.darkTheme);

    const dispatch = useDispatch();
    const [visibilityBar, setVisibility] = useState(
        themes.barVisibility.hidden
    );
    const [chosingGenrePerformerColor, setGenrePerformerColor] = useState(
        themes.filteringChosenPerformerGenreColor.notChosen
    );
    const [gettingNewToken] = useRefreshTokenMutation();

    const navigate = useNavigate();

    useEffect(() => {
        if (navigate) {
            dispatch(setPlay(false));
            dispatch(setPlay2(true));
        }
    }, [navigate]);
    // fef
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
                chosingGenrePerformerColor,
                setGenrePerformerColor,
            }}
        >
            <div className="container">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                >
                    <MainContent />
                    <Bar />
                </motion.div>
            </div>
        </ThemeContext.Provider>
    );
};

export default MainPage;
