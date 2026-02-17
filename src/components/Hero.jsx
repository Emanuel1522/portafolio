import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaDownload } from 'react-icons/fa';
import {
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava,
} from 'react-icons/fa';
import { SiSpringboot } from 'react-icons/si';
import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../data/translations';

const techBadges = [
    { icon: FaHtml5, color: '#E34F26', name: 'HTML' },
    { icon: FaCss3Alt, color: '#1572B6', name: 'CSS' },
    { icon: FaJs, color: '#F7DF1E', name: 'JS' },
    { icon: FaReact, color: '#61DAFB', name: 'React' },
    { icon: FaJava, color: '#ED8B00', name: 'Java' },
    { icon: SiSpringboot, color: '#6DB33F', name: 'Spring' },
];

function useTypingEffect(text, speed = 80) {
    const [displayed, setDisplayed] = useState('');
    const [done, setDone] = useState(false);

    useEffect(() => {
        setDisplayed('');
        setDone(false);
        let i = 0;
        const interval = setInterval(() => {
            setDisplayed(text.slice(0, i + 1));
            i++;
            if (i >= text.length) {
                clearInterval(interval);
                setDone(true);
            }
        }, speed);
        return () => clearInterval(interval);
    }, [text, speed]);

    return { displayed, done };
}

export default function Hero() {
    const { language } = useLanguage();
    const t = translations[language].hero;
    const { displayed, done } = useTypingEffect(t.title, 80);

    const cvFile = language === 'es' ? '/cv/cv-español.pdf' : '/cv/resume-english.pdf';

    return (
        <section className="min-h-screen flex items-center relative overflow-hidden pt-16">
            {/* Background gradient */}
            <div className="absolute inset-0 dark:bg-dark-900 bg-light-50">
                <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-accent-500/20 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Greeting */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg md:text-xl dark:text-slate-300 text-slate-600 mb-4"
                        >
                            {t.greeting}
                        </motion.p>

                        {/* Title with typing effect */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6">
                            <span className="gradient-text">{displayed}</span>
                            <span className={`animate-blink text-primary-500 ${done ? '' : ''}`}>|</span>
                        </h1>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="text-base md:text-lg dark:text-slate-400 text-slate-500 mb-8 max-w-lg leading-relaxed"
                        >
                            {t.description}
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="flex flex-wrap gap-4 mb-8"
                        >
                            <Link
                                to="/projects"
                                className="px-6 py-3 rounded-xl font-semibold text-white
                  bg-gradient-to-r from-primary-500 to-accent-500
                  hover:from-primary-600 hover:to-accent-600
                  transform hover:scale-105 transition-all duration-300 shadow-lg shadow-primary-500/25"
                            >
                                {t.cta1}
                            </Link>
                            <a
                                href={cvFile}
                                download
                                className="px-6 py-3 rounded-xl font-semibold flex items-center gap-2
                  dark:text-white dark:border-dark-600 dark:hover:bg-dark-700
                  text-slate-700 border-light-300 hover:bg-light-200
                  border-2 transform hover:scale-105 transition-all duration-300"
                            >
                                <FaDownload /> {t.cta2}
                            </a>
                        </motion.div>

                        {/* Social links */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                            className="flex gap-4"
                        >
                            {[
                                { icon: FaLinkedin, href: 'https://www.linkedin.com/in/emanuel-rojas-ramirez-0b187835a/', color: 'hover:text-blue-500' },
                                { icon: FaGithub, href: 'https://github.com/Emanuel1522', color: 'hover:text-slate-900 dark:hover:text-white' },
                                { icon: FaEnvelope, href: 'mailto:emanuel.rr1522@gmail.com', color: 'hover:text-red-500' },
                            ].map((social, i) => (
                                <motion.a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.2, y: -3 }}
                                    className={`text-2xl dark:text-slate-400 text-slate-500 ${social.color} transition-colors duration-200`}
                                >
                                    <social.icon />
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right side - Photo + floating badges */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative flex justify-center"
                    >
                        {/* Profile image */}
                        <div className="relative">
                            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden
                ring-4 ring-primary-500/30 shadow-2xl shadow-primary-500/20">
                                <img
                                    src="/images/profile.jpeg"
                                    alt="Emanuel Rojas"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* Decorative ring */}
                            <div className="absolute -inset-4 rounded-full border-2 border-dashed border-primary-500/20 animate-[spin_20s_linear_infinite]" />
                        </div>

                        {/* Floating tech badges */}
                        {techBadges.map((tech, i) => {
                            const positions = [
                                'top-0 -left-4',
                                'top-8 -right-8',
                                '-bottom-2 -left-8',
                                'bottom-8 -right-4',
                                'top-1/2 -left-12',
                                'top-1/3 -right-12',
                            ];
                            return (
                                <motion.div
                                    key={i}
                                    className={`absolute ${positions[i]} hidden md:flex`}
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                                >
                                    <div className="p-3 rounded-xl dark:bg-dark-800/90 bg-white/90 shadow-lg backdrop-blur-sm
                    border dark:border-dark-700 border-light-200">
                                        <tech.icon size={24} style={{ color: tech.color }} />
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
