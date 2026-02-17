import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';

export default function LanguageToggle() {
    const { language, toggleLanguage } = useLanguage();

    return (
        <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            onClick={toggleLanguage}
            className="px-3 py-1.5 rounded-lg text-sm font-semibold transition-colors duration-200
        dark:text-slate-300 dark:hover:bg-dark-700 dark:hover:text-white
        text-slate-600 hover:bg-light-200 hover:text-slate-900
        border dark:border-dark-700 border-light-300"
            aria-label="Toggle language"
        >
            {language === 'es' ? 'EN' : 'ES'}
        </motion.button>
    );
}
