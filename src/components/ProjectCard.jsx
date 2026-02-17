import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../data/translations';

export default function ProjectCard({ project }) {
    const { language } = useLanguage();
    const t = translations[language].projects;

    const title = language === 'es' ? project.titleEs : project.titleEn;
    const desc = language === 'es' ? project.descEs : project.descEn;

    const categoryColors = {
        frontend: 'bg-primary-500',
        backend: 'bg-accent-500',
        ai: 'bg-sky-500',
    };

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className="group rounded-2xl overflow-hidden
        dark:bg-dark-800 bg-white
        border dark:border-dark-700 border-light-200
        shadow-lg hover:shadow-2xl hover:shadow-primary-500/10
        transition-all duration-300"
        >
            {/* Image */}
            <div className="relative overflow-hidden h-48">
                <img
                    src={project.image}
                    alt={title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Category badge */}
                <span className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold text-white
          ${categoryColors[project.category]}`}>
                    {t[project.category]}
                </span>
            </div>

            {/* Content */}
            <div className="p-5">
                <h3 className="text-lg font-bold font-heading mb-2 dark:text-white text-slate-900">
                    {title}
                </h3>
                <p className="text-sm dark:text-slate-400 text-slate-500 mb-4 line-clamp-2">
                    {desc}
                </p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.techs.map((tech) => (
                        <span
                            key={tech}
                            className="px-2.5 py-1 rounded-lg text-xs font-medium font-mono
                dark:bg-dark-700 dark:text-slate-300
                bg-light-100 text-slate-600"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                    {project.demo ? (
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold
                text-white bg-gradient-to-r from-primary-500 to-accent-500
                hover:from-primary-600 hover:to-accent-600
                transition-all duration-200"
                        >
                            <FaExternalLinkAlt size={12} /> {t.viewDemo}
                        </a>
                    ) : (
                        <span className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold
              dark:text-slate-500 text-slate-400 dark:bg-dark-700 bg-light-100 cursor-not-allowed">
                            {t.noDemo}
                        </span>
                    )}
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold
              border-2 dark:border-dark-600 border-light-300
              dark:text-white text-slate-700
              dark:hover:bg-dark-700 hover:bg-light-200
              transition-all duration-200"
                    >
                        <FaGithub size={14} /> {t.viewGithub}
                    </a>
                </div>
            </div>
        </motion.div>
    );
}
