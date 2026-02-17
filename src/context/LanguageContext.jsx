import { createContext, useState } from 'react';

export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState(() => {
        const saved = localStorage.getItem('language');
        return saved || 'es';
    });

    const toggleLanguage = () => {
        setLanguage(prev => {
            const next = prev === 'es' ? 'en' : 'es';
            localStorage.setItem('language', next);
            return next;
        });
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}
