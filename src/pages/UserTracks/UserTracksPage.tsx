import { useContext } from 'react';

import { motion } from 'framer-motion';

import ThemeContext from '../../themes';
import Bar from '../../components/Bar/Bar';
import MainContent from './MainContent/MainContent';

import { StyledContainer } from '../../components/StyledContainer/StyledContainer';

const MyTracks = () => {
    const { themeMode } = useContext(ThemeContext);

    return (
        <StyledContainer style={themeMode.main}>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
            >
                <MainContent />
                <Bar />
            </motion.div>
        </StyledContainer>
    );
};

export default MyTracks;
