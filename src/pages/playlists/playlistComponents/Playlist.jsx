import { useState } from 'react';

import ThemeContext, { themes } from '../../../themes';
import Bar from './components/Bar/Bar';
import Main from './components/Main/Main';

const Playlist = () => {
    const [themeMode, setThemeMode] = useState(themes.darkTheme);
    const [visibilityBar, setVisibility] = useState(
        themes.barVisibility.hidden
    );
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

export default Playlist;
