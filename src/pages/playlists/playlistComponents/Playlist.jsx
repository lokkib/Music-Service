import { useState } from 'react';

import ThemeContext, { themes } from '../../../themes';
import Bar from './components/Bar/Bar';
import Main from './components/Main/Main';

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
