import { FaSun, FaMoon } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            onClick={toggleTheme}
            className="p-2 rounded-lg transition-colors duration-200
        dark:text-yellow-400 dark:hover:bg-dark-700
        text-indigo-600 hover:bg-light-200"
            aria-label="Toggle theme"
        >
            {theme === 'dark' ? <FaSun size={20} /> : <FaMoon size={20} />}
        </motion.button>
    );
}
