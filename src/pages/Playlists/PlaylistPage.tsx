import { useState } from 'react';

import { motion } from 'framer-motion';
import { DarkTheme, BarVisibility } from '../../@types/themes/GlobalContext';
import ThemeContext, { themes } from '../../themes';
import Bar from '../../components/Bar/Bar';
import MainContent from './MainContent/MainContent';

const PlaylistPage = () => {
    const [themeMode, setThemeMode] = useState<DarkTheme>(themes.darkTheme);
    const [visibilityBar, setVisibility] = useState<BarVisibility>(
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

export default PlaylistPage;
