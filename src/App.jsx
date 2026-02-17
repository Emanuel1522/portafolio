import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Certificates from './pages/Certificates';
import Contact from './pages/Contact';

function PageWrapper({ children }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
        >
            {children}
        </motion.div>
    );
}

function AppContent() {
    const location = useLocation();

    return (
        <div className="min-h-screen dark:bg-dark-900 bg-light-50 dark:text-slate-100 text-slate-900 transition-colors duration-300">
            <Navbar />
            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
                    <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
                    <Route path="/certificates" element={<PageWrapper><Certificates /></PageWrapper>} />
                    <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
                </Routes>
            </AnimatePresence>
            <Footer />
        </div>
    );
}

export default function App() {
    return (
        <ThemeProvider>
            <LanguageProvider>
                <AppContent />
            </LanguageProvider>
        </ThemeProvider>
    );
}
