import { motion } from 'framer-motion';

export default function CertificateCard({ certificate, language, onClick }) {
    const title = language === 'es' ? certificate.titleEs : certificate.titleEn;

    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            onClick={onClick}
            className="group cursor-pointer rounded-2xl overflow-hidden
        dark:bg-dark-800 bg-white
        border dark:border-dark-700 border-light-200
        shadow-lg hover:shadow-2xl hover:shadow-primary-500/10
        transition-all duration-300"
        >
            <div className="relative overflow-hidden aspect-[4/3]">
                <img
                    src={certificate.image}
                    alt={title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent
          opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white text-sm font-semibold">{title}</span>
                </div>
            </div>
            <div className="p-3">
                <p className="text-sm font-medium dark:text-slate-200 text-slate-700 truncate">
                    {title}
                </p>
            </div>
        </motion.div>
    );
}
