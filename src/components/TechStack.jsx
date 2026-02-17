import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../data/translations';
import { skillCategories } from '../data/skills';
import { useTheme } from '../hooks/useTheme';

export default function TechStack() {
    const { language } = useLanguage();
    const { theme } = useTheme();
    const t = translations[language].about;

    const categoryLabels = {
        frontend: t.frontend,
        backend: t.backend,
        databases: t.databases,
        ai: t.ai,
        tools: t.tools,
    };

    return (
        <div>
            <h3 className="text-2xl font-bold font-heading mb-6 gradient-text">
                {t.knowledge}
            </h3>

            <div className="space-y-6">
                {skillCategories.map((category) => (
                    <div key={category.id}>
                        <h4 className="text-sm font-semibold uppercase tracking-wider mb-3
              dark:text-slate-400 text-slate-500">
                            {categoryLabels[category.id]}
                        </h4>
                        <div className="flex flex-wrap gap-3">
                            {category.skills.map((skill, i) => (
                                <motion.div
                                    key={skill.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                    whileHover={{ y: -5, scale: 1.05 }}
                                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl
                    dark:bg-dark-800 bg-white shadow-md
                    border dark:border-dark-700 border-light-200
                    hover:shadow-lg hover:border-primary-500/50
                    transition-all duration-200 cursor-default"
                                >
                                    <skill.icon
                                        size={20}
                                        style={{ color: theme === 'dark' || skill.color !== '#000000' ? skill.color : '#9ca3af' }}
                                    />
                                    <span className="text-sm font-medium dark:text-slate-200 text-slate-700">
                                        {skill.name}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
