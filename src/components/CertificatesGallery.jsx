import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCertificate } from 'react-icons/fa';
import CertificateCard from './CertificateCard';
import Modal from './Modal';
import { certificates } from '../data/certificates';
import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../data/translations';

export default function CertificatesGallery() {
    const [activeTab, setActiveTab] = useState('programming');
    const [modalOpen, setModalOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const { language } = useLanguage();
    const t = translations[language].certificates;

    const tabs = [
        { id: 'programming', label: t.programming },
        { id: 'english', label: t.english },
        { id: 'others', label: t.others },
    ];

    const filtered = useMemo(
        () => certificates.filter((c) => c.category === activeTab),
        [activeTab]
    );

    const openModal = (index) => {
        setCurrentIndex(index);
        setModalOpen(true);
    };

    const goNext = () => setCurrentIndex((i) => (i + 1) % filtered.length);
    const goPrev = () => setCurrentIndex((i) => (i - 1 + filtered.length) % filtered.length);

    const currentCert = filtered[currentIndex];

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
                            <FaCertificate className="text-white text-lg" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold font-heading dark:text-white text-slate-900">
                            {t.title}
                        </h2>
                    </div>
                    <p className="dark:text-slate-400 text-slate-500 max-w-md mx-auto">
                        {t.subtitle}
                    </p>
                </motion.div>

                {/* Tabs */}
                <div className="flex justify-center gap-3 mb-10">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => { setActiveTab(tab.id); setCurrentIndex(0); }}
                            className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200
                ${activeTab === tab.id
                                    ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg shadow-primary-500/25'
                                    : 'dark:bg-dark-800 bg-white dark:text-slate-300 text-slate-600 border dark:border-dark-700 border-light-200 dark:hover:bg-dark-700 hover:bg-light-200'
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <AnimatePresence mode="popLayout">
                        {filtered.map((cert, index) => (
                            <CertificateCard
                                key={cert.id}
                                certificate={cert}
                                language={language}
                                onClick={() => openModal(index)}
                            />
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Modal */}
            {currentCert && (
                <Modal
                    isOpen={modalOpen}
                    onClose={() => setModalOpen(false)}
                    image={currentCert.image}
                    title={language === 'es' ? currentCert.titleEs : currentCert.titleEn}
                    onPrev={filtered.length > 1 ? goPrev : null}
                    onNext={filtered.length > 1 ? goNext : null}
                />
            )}
        </section>
    );
}
