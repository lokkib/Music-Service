import { useState } from 'react';

import ThemeContext, { themes } from '../../themes';
import Bar from './components/Bar/Bar';
import Main from './components/Main/Main';

const Tracks = () => {
    const [themeMode, setThemeMode] = useState(themes.darkTheme);
    const [visibilityBar, setVisibility] = useState(
        themes.barVisibility.hidden
    );
    const [chosingGenrePerformerColor, setGenrePerformerColor] = useState(
        themes.filteringChosenPerformerGenreColor.notChosen
    );



    return (
        <ThemeContext.Provider
            value={{
                themeMode,
                setThemeMode,
                visibilityBar,
                setVisibility,
                chosingGenrePerformerColor,
                setGenrePerformerColor
                
            }}
        >
            <div className="container">
                <Main />
                <Bar />
            </div>
        </ThemeContext.Provider>
    );
};

export default Tracks;
