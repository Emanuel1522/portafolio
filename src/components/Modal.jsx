import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';
import { useEffect, useCallback } from 'react';

export default function Modal({ isOpen, onClose, image, title, onPrev, onNext }) {
    const handleKeyDown = useCallback((e) => {
        if (e.key === 'Escape') onClose();
        if (e.key === 'ArrowLeft' && onPrev) onPrev();
        if (e.key === 'ArrowRight' && onNext) onNext();
    }, [onClose, onPrev, onNext]);

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
        };
    }, [isOpen, handleKeyDown]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4
            bg-black/80 backdrop-blur-sm"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ type: 'spring', damping: 25 }}
                        className="relative max-w-4xl max-h-[90vh] w-full"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close button */}
                        <button
                            onClick={onClose}
                            className="absolute -top-12 right-0 p-2 rounded-full text-white/80 hover:text-white
                hover:bg-white/10 transition-colors z-10"
                            aria-label="Close"
                        >
                            <FaTimes size={24} />
                        </button>

                        {/* Image */}
                        <img
                            src={image}
                            alt={title}
                            className="w-full h-auto max-h-[85vh] object-contain rounded-xl"
                        />

                        {/* Title */}
                        {title && (
                            <p className="text-center text-white/80 text-sm mt-3">{title}</p>
                        )}

                        {/* Navigation arrows */}
                        {onPrev && (
                            <button
                                onClick={onPrev}
                                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14
                  p-3 rounded-full text-white/80 hover:text-white hover:bg-white/10
                  transition-colors hidden md:block"
                                aria-label="Previous"
                            >
                                <FaChevronLeft size={24} />
                            </button>
                        )}
                        {onNext && (
                            <button
                                onClick={onNext}
                                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14
                  p-3 rounded-full text-white/80 hover:text-white hover:bg-white/10
                  transition-colors hidden md:block"
                                aria-label="Next"
                            >
                                <FaChevronRight size={24} />
                            </button>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
