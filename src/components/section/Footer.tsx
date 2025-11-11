'use client';

import { motion } from 'framer-motion';
import { Facebook, Instagram, Mail, Phone } from "lucide-react";

const container = {
    hidden: { opacity: 0 },
    show:   { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const item = {
    hidden: { opacity: 0, y: 14 },
    show:   { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};

export default function Footer() {
    return (
        <footer className="mt-0 py-2 bg-amber-50">
            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="mt-12 mx-auto max-w-7xl rounded-t-[32px] bg-[#413224] text-white px-6 py-14 md:px-12"
            >
                {/* Top grid */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left"
                >
                    {/* Social */}
                    <motion.div className="space-y-3">
                        <h3 className="font-semibold text-lg">We are on</h3>
                        <div className="flex justify-center md:justify-start gap-4 text-white/90">
                            <motion.a
                                href="#"
                                aria-label="Facebook"
                                whileHover={{ scale: 1.06 }}
                                className="hover:text-white transition"
                            >
                                <Facebook className="w-5 h-5" />
                            </motion.a>
                            <motion.a
                                href="#"
                                aria-label="Instagram"
                                whileHover={{ scale: 1.06 }}
                                className="hover:text-white transition"
                            >
                                <Instagram className="w-5 h-5" />
                            </motion.a>
                            <motion.a
                                href="mailto:info@pyramidresort.et"
                                aria-label="Email"
                                whileHover={{ scale: 1.06 }}
                                className="hover:text-white transition"
                            >
                                <Mail className="w-5 h-5" />
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Location */}
                    <motion.div  className="space-y-3">
                        <h3 className="font-semibold text-lg">Location</h3>
                        <p className="text-white/80 leading-relaxed">
                            Pyramid Resort, Bishoftu Lakeside, Ethiopia
                        </p>
                    </motion.div>

                    {/* Contact */}
                    <motion.div className="space-y-3">
                        <h3 className="font-semibold text-lg">Contact Us</h3>
                        <p className="flex items-center justify-center md:justify-start gap-2 text-white/80">
                            <Phone className="w-4 h-4" /> +251 987 654 321
                        </p>
                        <p className="flex items-center justify-center md:justify-start gap-2 text-white/80">
                            <Mail className="w-4 h-4" /> info@pyramidresort.et
                        </p>
                    </motion.div>
                </motion.div>

                {/* Divider + bottom bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="mt-10 border-t border-white/20 pt-6"
                >
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-4 justify-center md:justify-between text-sm text-white/70">
                        <span>© {new Date().getFullYear()} Pyramid Resort. All Rights Reserved.</span>

                        {/* Aligned builder credit with live link to Doxa */}
                        <a
                            href="https://doxaplc.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition"
                        >
                            Built by Doxa Innovations
                        </a>
                    </div>
                </motion.div>
            </motion.div>
        </footer>
    );
}
