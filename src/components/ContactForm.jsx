import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaBriefcase, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';
import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../data/translations';

export default function ContactForm() {
    const { language } = useLanguage();
    const t = translations[language].contact;
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState(null); // 'sending' | 'success' | 'error'

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('sending');

        // Using mailto fallback
        const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
        const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`);
        window.location.href = `mailto:emanuel.rr1522@gmail.com?subject=${subject}&body=${body}`;

        setTimeout(() => {
            setStatus('success');
            setForm({ name: '', email: '', message: '' });
            setTimeout(() => setStatus(null), 3000);
        }, 1000);
    };

    return (
        <section className="py-20 dark:bg-dark-800/50 bg-light-100/50">
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
                            <FaEnvelope className="text-white text-lg" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold font-heading dark:text-white text-slate-900">
                            {t.title}
                        </h2>
                    </div>
                    <p className="dark:text-slate-400 text-slate-500 max-w-md mx-auto">
                        {t.subtitle}
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Left - Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="flex items-center gap-4 p-4 rounded-xl
              dark:bg-dark-800 bg-white border dark:border-dark-700 border-light-200">
                            <div className="p-3 rounded-xl bg-primary-500/10">
                                <FaEnvelope className="text-primary-500 text-xl" />
                            </div>
                            <div>
                                <p className="text-sm dark:text-slate-400 text-slate-500">{t.email || 'Email'}</p>
                                <p className="font-medium dark:text-white text-slate-900">emanuel.rr1522@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 p-4 rounded-xl
              dark:bg-dark-800 bg-white border dark:border-dark-700 border-light-200">
                            <div className="p-3 rounded-xl bg-primary-500/10">
                                <FaMapMarkerAlt className="text-primary-500 text-xl" />
                            </div>
                            <div>
                                <p className="text-sm dark:text-slate-400 text-slate-500">Location</p>
                                <p className="font-medium dark:text-white text-slate-900">{t.location}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 p-4 rounded-xl
              dark:bg-dark-800 bg-white border dark:border-dark-700 border-light-200">
                            <div className="p-3 rounded-xl bg-primary-500/10">
                                <FaBriefcase className="text-primary-500 text-xl" />
                            </div>
                            <div>
                                <p className="text-sm dark:text-slate-400 text-slate-500">Status</p>
                                <p className="font-medium dark:text-white text-slate-900">{t.available}</p>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-4 pt-4">
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
                                    className={`p-3 rounded-xl dark:bg-dark-800 bg-white border dark:border-dark-700 border-light-200
                    text-2xl dark:text-slate-400 text-slate-500 ${social.color} transition-colors duration-200`}
                                >
                                    <social.icon />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right - Form */}
                    <motion.form
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        onSubmit={handleSubmit}
                        className="space-y-5 p-6 rounded-2xl dark:bg-dark-800 bg-white
              border dark:border-dark-700 border-light-200 shadow-lg"
                    >
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium mb-2 dark:text-slate-300 text-slate-600">
                                {t.name}
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder={t.namePlaceholder}
                                required
                                className="w-full px-4 py-3 rounded-xl text-sm
                  dark:bg-dark-700 bg-light-50
                  dark:text-white text-slate-900
                  dark:border-dark-600 border-light-300 border
                  focus:ring-2 focus:ring-primary-500 focus:border-transparent
                  outline-none transition-all duration-200
                  dark:placeholder-slate-500 placeholder-slate-400"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2 dark:text-slate-300 text-slate-600">
                                {t.email}
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder={t.emailPlaceholder}
                                required
                                className="w-full px-4 py-3 rounded-xl text-sm
                  dark:bg-dark-700 bg-light-50
                  dark:text-white text-slate-900
                  dark:border-dark-600 border-light-300 border
                  focus:ring-2 focus:ring-primary-500 focus:border-transparent
                  outline-none transition-all duration-200
                  dark:placeholder-slate-500 placeholder-slate-400"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-2 dark:text-slate-300 text-slate-600">
                                {t.message}
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder={t.messagePlaceholder}
                                required
                                rows={5}
                                className="w-full px-4 py-3 rounded-xl text-sm resize-none
                  dark:bg-dark-700 bg-light-50
                  dark:text-white text-slate-900
                  dark:border-dark-600 border-light-300 border
                  focus:ring-2 focus:ring-primary-500 focus:border-transparent
                  outline-none transition-all duration-200
                  dark:placeholder-slate-500 placeholder-slate-400"
                            />
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            disabled={status === 'sending'}
                            className="w-full py-3.5 rounded-xl font-semibold text-white flex items-center justify-center gap-2
                bg-gradient-to-r from-primary-500 to-accent-500
                hover:from-primary-600 hover:to-accent-600
                disabled:opacity-50 disabled:cursor-not-allowed
                shadow-lg shadow-primary-500/25
                transition-all duration-200"
                        >
                            <FaPaperPlane />
                            {status === 'sending' ? t.sending : t.send}
                        </motion.button>

                        {status === 'success' && (
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-green-500 text-sm text-center font-medium"
                            >
                                {t.success}
                            </motion.p>
                        )}
                    </motion.form>
                </div>
            </div>
        </section>
    );
}
