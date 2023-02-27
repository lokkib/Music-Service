import { useState } from 'react';

import { motion } from 'framer-motion';
import Bar from '../../components/Bar/Bar';
import { DarkTheme, BarVisibility } from '../../@types/themes/GlobalContext';
import ThemeContext, { themes } from '../../themes';
import MainContent from './MainContent/MainContent';

const MainPage = () => {
    const [themeMode, setThemeMode] = useState<DarkTheme>(themes.darkTheme);

    const [visibilityBar, setVisibility] = useState<BarVisibility>(
        themes.barVisibility.hidden
    );

    return (
        <div className="container">
            <ThemeContext.Provider
                value={{
                    themeMode,
                    setThemeMode,
                    visibilityBar,
                    setVisibility,
                }}
            >
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                >
                    <MainContent />
                    <Bar />
                </motion.div>
            </ThemeContext.Provider>
        </div>
    );
};

export default MainPage;
