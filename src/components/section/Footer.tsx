'use client';

import { Facebook, Instagram, Mail, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="mt-0 py-2 bg-amber-50 ">
            <div className=" mt-12 mx-auto max-w-7xl rounded-t-[32px] bg-[#413224] text-white px-6 py-14 md:px-12">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">

                    {/* Social */}
                    <div className="space-y-3">
                        <h3 className="font-semibold text-lg">We are on</h3>

                        <div className="flex justify-center md:justify-start gap-4 text-white/90">
                            <a href="#" className="hover:text-white transition">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="hover:text-white transition">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="hover:text-white transition">
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Location */}
                    <div className="space-y-3">
                        <h3 className="font-semibold text-lg">Location</h3>
                        <p className="text-white/80 leading-relaxed">
                            Pyramid Resort, Bishoftu Lakeside, Ethiopia
                        </p>
                    </div>

                    {/* Contact */}
                    <div className="space-y-3">
                        <h3 className="font-semibold text-lg">Contact Us</h3>
                        <p className="flex items-center justify-center md:justify-start gap-2 text-white/80">
                            <Phone className="w-4 h-4" /> +251 987 654 321
                        </p>
                        <p className="flex items-center justify-center md:justify-start gap-2 text-white/80">
                            <Mail className="w-4 h-4" /> info@pyramidresort.et
                        </p>
                    </div>
                </div>

                {/* Divider + bottom text */}
                <div className="mt-10 border-t border-white/20 pt-6 text-center text-sm text-white/70">
                    © {new Date().getFullYear()} Pyramid Resort. All Rights Reserved.
                </div>
            </div>
        </footer>
    );
}
