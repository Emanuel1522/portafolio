import { motion } from 'framer-motion';
import { FaUser } from 'react-icons/fa';
import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../data/translations';
import TechStack from './TechStack';

export default function About() {
    const { language } = useLanguage();
    const t = translations[language].about;

    return (
        <section className="py-20 dark:bg-dark-800/50 bg-light-100/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Left - About Me */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2.5 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500">
                                <FaUser className="text-white text-lg" />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold font-heading dark:text-white text-slate-900">
                                {t.title}
                            </h2>
                        </div>

                        <div className="space-y-4">
                            <p className="dark:text-slate-300 text-slate-600 leading-relaxed">
                                {t.bio1}
                            </p>
                            <p className="dark:text-slate-300 text-slate-600 leading-relaxed">
                                {t.bio2}
                            </p>
                            <p className="dark:text-slate-300 text-slate-600 leading-relaxed">
                                {t.bio3}
                            </p>
                        </div>
                    </motion.div>

                    {/* Right - Tech Stack */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <TechStack />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
