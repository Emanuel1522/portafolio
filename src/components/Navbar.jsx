import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FaCode } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';
import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../data/translations';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { language } = useLanguage();
    const t = translations[language].nav;
    const location = useLocation();

    const navLinks = [
        { to: '/', label: t.home },
        { to: '/projects', label: t.projects },
        { to: '/certificates', label: t.certificates },
        { to: '/contact', label: t.contact },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl
      dark:bg-dark-900/80 bg-white/80 border-b dark:border-dark-700 border-light-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 group">
                        <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                            <FaCode className="text-2xl text-primary-500" />
                        </motion.div>
                        <span className="text-xl font-bold font-heading gradient-text">
                            Emanuel Rojas
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                  ${isActive(link.to)
                                        ? 'dark:bg-primary-500/20 bg-primary-500/10 text-primary-500 dark:text-primary-400'
                                        : 'dark:text-slate-300 text-slate-600 dark:hover:text-white hover:text-slate-900 dark:hover:bg-dark-700 hover:bg-light-200'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Right side */}
                    <div className="flex items-center gap-2">
                        <ThemeToggle />
                        <LanguageToggle />
                        {/* Mobile menu button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden p-2 rounded-lg dark:text-slate-300 text-slate-600
                dark:hover:bg-dark-700 hover:bg-light-200"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden overflow-hidden dark:bg-dark-900/95 bg-white/95 backdrop-blur-xl
              border-b dark:border-dark-700 border-light-200"
                    >
                        <div className="px-4 py-3 space-y-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.to}
                                    to={link.to}
                                    onClick={() => setIsOpen(false)}
                                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200
                    ${isActive(link.to)
                                            ? 'dark:bg-primary-500/20 bg-primary-500/10 text-primary-500 dark:text-primary-400'
                                            : 'dark:text-slate-300 text-slate-600 dark:hover:text-white hover:text-slate-900 dark:hover:bg-dark-700 hover:bg-light-200'
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
