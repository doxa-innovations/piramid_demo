import type { Metadata } from "next";
import "./globals.css";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-luxury",
});

export const metadata: Metadata = {
    title: "Pyramid Resort — Luxury Lakeside Stay",
    description:
        "Modern lakeside resort in Bishoftu, Ethiopia. Glass UI demo showcasing curated rooms, amenities, and the lakeside experience.",

    metadataBase: new URL("https://pyramid.doxaplc.com/"),

    openGraph: {
        title: "Pyramid Resort — Luxury Lakeside Stay",
        description:
            "Discover a modern lakeside retreat in Bishoftu. Curated rooms, premium amenities, and unforgettable sunsets.",
        url: "https://pyramid.doxaplc.com/",
        siteName: "Pyramid Resort",
        type: "website",
    },

    twitter: {
        card: "summary",
        title: "Pyramid Resort — Luxury Lakeside Stay",
        description:
            "Modern lakeside resort demo. Curated rooms crafted for elegance and comfort.",
    },

    icons: {
        icon: "/pyramidlogo.svg",
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={cormorant.variable}>
        <body className="font-luxury bg-[--bg-deep] text-white">
        {children}
        </body>
        </html>
    );
}
