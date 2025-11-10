import './globals.css';
import { Cormorant_Garamond } from 'next/font/google';

const cormorant = Cormorant_Garamond({
    subsets: ['latin'],
    weight: ['400','500','600','700'],
    display: 'swap',
    variable: '--font-luxury',
});

export const metadata = { title: 'Pyramid Resort' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={cormorant.variable}>
        <body className="font-luxury bg-[#0b0b0c] text-white">{children}</body>
        </html>
    );
}
