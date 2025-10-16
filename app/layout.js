import { Geist, Geist_Mono, Forum, Manrope } from "next/font/google";
import "./globals.css";



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

const forum = Forum({
  variable: "--font-forum",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata = {
  title: "Travel Agency - World's Most Extraordinary Places",
  description: "Discover the world's most extraordinary places with our luxury travel packages. Book your next adventure today.",
  keywords: "travel, luxury, adventure, destinations, booking",
  authors: [{ name: "Ustim" }],
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
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover" />
        {/* <link rel="preload" href="/bg_main_44.png" as="image" />
        <link rel="preload" href="/comp_1/carousel/image_carousel_1.png" as="image" />
        <link rel="preload" href="/comp_1/rhombus.png" as="image" /> */}
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${forum.variable} ${manrope.variable}`} style={{ overflowX: 'hidden' }}>
         {/* подключаем клиентский компонент, который устанавливает переменную --vh  */}
         {/* <ViewportFix/> */}
        {children}
      </body>
    </html>
  );
}
