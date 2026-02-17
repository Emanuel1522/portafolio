import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaEnvelope, FaCode, FaHeart } from 'react-icons/fa';
import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../data/translations';

export default function Footer() {
    const { language } = useLanguage();
    const t = translations[language];

    const quickLinks = [
        { to: '/', label: t.nav.home },
        { to: '/projects', label: t.nav.projects },
        { to: '/certificates', label: t.nav.certificates },
        { to: '/contact', label: t.nav.contact },
    ];

    return (
        <footer className="dark:bg-dark-900 bg-light-50 border-t dark:border-dark-700 border-light-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Brand */}
                    <div>
                        <Link to="/" className="flex items-center gap-2 mb-4">
                            <FaCode className="text-2xl text-primary-500" />
                            <span className="text-xl font-bold font-heading gradient-text">Emanuel Rojas</span>
                        </Link>
                        <p className="text-sm dark:text-slate-400 text-slate-500 max-w-xs">
                            {t.hero.description.slice(0, 120)}...
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold font-heading mb-4 dark:text-white text-slate-900">
                            {language === 'es' ? 'Enlaces Rápidos' : 'Quick Links'}
                        </h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.to}>
                                    <Link
                                        to={link.to}
                                        className="text-sm dark:text-slate-400 text-slate-500
                      hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="font-semibold font-heading mb-4 dark:text-white text-slate-900">
                            {language === 'es' ? 'Sígueme' : 'Follow Me'}
                        </h4>
                        <div className="flex gap-3">
                            {[
                                { icon: FaLinkedin, href: 'https://www.linkedin.com/in/emanuel-rojas-ramirez-0b187835a/' },
                                { icon: FaGithub, href: 'https://github.com/Emanuel1522' },
                                { icon: FaEnvelope, href: 'mailto:emanuel.rr1522@gmail.com' },
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2.5 rounded-xl dark:bg-dark-800 bg-white border dark:border-dark-700 border-light-200
                    dark:text-slate-400 text-slate-500
                    hover:text-primary-500 dark:hover:text-primary-400
                    hover:border-primary-500/50 transition-all duration-200"
                                >
                                    <social.icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-10 pt-6 border-t dark:border-dark-700 border-light-200
          flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-sm dark:text-slate-400 text-slate-500">
                        {t.footer.rights}
                    </p>
                    <p className="text-sm dark:text-slate-400 text-slate-500 flex items-center gap-1">
                        {t.footer.madeWith.split('❤️')[0]}<FaHeart className="text-red-500" />{t.footer.madeWith.split('❤️')[1]}
                    </p>
                </div>
            </div>
        </footer>
    );
}
