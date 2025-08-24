import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Menu from "./comp/menu/Menu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Travel Agency - World's Most Extraordinary Places",
  description: "Discover the world's most extraordinary places with our luxury travel packages. Book your next adventure today.",
  keywords: "travel, luxury, adventure, destinations, booking",
  authors: [{ name: "Travel Agency" }],
  openGraph: {
    title: "Travel Agency - World's Most Extraordinary Places",
    description: "Discover the world's most extraordinary places with our luxury travel packages.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ overflowX: 'hidden' }}>
      <head>
        <link rel="preload" href="/bg_main_44.png" as="image" />
        <link rel="preload" href="/comp_1/carousel/image_carousel_1.png" as="image" />
        <link rel="preload" href="/comp_1/rhombus.png" as="image" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`} style={{ overflowX: 'hidden' }}>
        {/* <Menu /> */}
        {children}
      </body>
    </html>
  );
}
