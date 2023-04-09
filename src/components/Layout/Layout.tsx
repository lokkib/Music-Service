import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import Bar from '../Bar/Bar';

const Layout = () => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
    >
        <Outlet />
        <Bar />
    </motion.div>
);

export default Layout;
