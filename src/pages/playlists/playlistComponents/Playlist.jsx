import Main from './components/Main/Main';
import Bar from './components/Bar/Bar';
import ThemeContext, { themes } from '../../../themes';
import { useState } from 'react';

const Playlist = () => {
    const [theme2, setTheme2] = useState(themes.dark);
    const [theme3, setTheme3] = useState(themes.darkProgress);
    const [theme4, setTheme4] = useState(themes.lightBorder);
    const [theme5, setTheme5] = useState(themes.darkBurgerLine);
    const [theme6, setTheme6] = useState(themes.darkTrackTitle);
    const [theme7, setTheme7] = useState(themes.darkTrackIconsFill);
    const [theme8, setTheme8] = useState(themes.darkTrackIconsStroke);
    const [theme9, setTheme9] = useState(themes.darkTrackIconsFill2);
    const [theme10, setTheme10] = useState(themes.darkTrackIconsStroke2);
    return (
        <ThemeContext.Provider
            value={{
                theme2,
                setTheme2,
                theme3,
                setTheme3,
                theme4,
                setTheme4,
                theme5,
                setTheme5,
                theme6,
                setTheme6,
                theme7,
                setTheme7,
                theme8,
                setTheme8,
                theme9,
                setTheme9,
                theme10,
                setTheme10,
            }}
        >
            <div className="container">
                <Main />
                <Bar />
                <footer className="footer"></footer>
            </div>
        </ThemeContext.Provider>
    );
};

export default Playlist;
