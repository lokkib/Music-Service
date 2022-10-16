import Main from './components/Main/Main';
import Bar from './components/Bar/Bar';
import ThemeContext, { themes } from '../../../themes';
import { useState } from 'react';

const Playlist = () => {
    const [themeMode, setThemeMode] = useState(themes.darkTheme);

    return (
        <ThemeContext.Provider
            value={{
                themeMode,
                setThemeMode,
            }}
        >
            <div className="container">
                <Main />
                <Bar />
            </div>
        </ThemeContext.Provider>
    );
};

export default Playlist;
