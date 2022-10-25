import { useState } from 'react';

import ThemeContext, { themes } from '../../themes';
import Bar from './components/Bar/Bar';
import Main from './components/Main/Main';

const Tracks = () => {
    const [themeMode, setThemeMode] = useState(themes.darkTheme);

    return (
        <ThemeContext.Provider value={{ themeMode, setThemeMode }}>
            <div className="container">
                <Main />
                <Bar />
                <footer className="footer"></footer>
            </div>
        </ThemeContext.Provider>
    );
};

export default Tracks;
