import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaProjectDiagram } from 'react-icons/fa';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';
import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../data/translations';

export default function ProjectsGrid() {
    const [filter, setFilter] = useState('all');
    const { language } = useLanguage();
    const t = translations[language].projects;

    const filters = [
        { id: 'all', label: t.all },
        { id: 'frontend', label: t.frontend },
        { id: 'backend', label: t.backend },
    ];

    const filtered = filter === 'all'
        ? projects
        : projects.filter((p) => p.category === filter);

    return (
        <section className="py-20 dark:bg-dark-900 bg-light-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="p-2.5 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500">
                            <FaProjectDiagram className="text-white text-lg" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold font-heading dark:text-white text-slate-900">
                            {t.title}
                        </h2>
                    </div>
                    <p className="dark:text-slate-400 text-slate-500 max-w-md mx-auto">
                        {t.subtitle}
                    </p>
                </motion.div>

                {/* Filters */}
                <div className="flex justify-center gap-3 mb-10">
                    {filters.map((f) => (
                        <button
                            key={f.id}
                            onClick={() => setFilter(f.id)}
                            className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200
                ${filter === f.id
                                    ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg shadow-primary-500/25'
                                    : 'dark:bg-dark-800 bg-white dark:text-slate-300 text-slate-600 border dark:border-dark-700 border-light-200 dark:hover:bg-dark-700 hover:bg-light-200'
                                }`}
                        >
                            {f.label}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence mode="popLayout">
                        {filtered.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
