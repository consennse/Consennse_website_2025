
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'de' },
  ];
}
const supported = ['en','de']; 
export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params : Promise <{locale : string}>; 
}>) {
const resolved = await params ; 
const locale = supported.includes(resolved?.locale) ? resolved.locale : 'en' ; 
  return (
    <html lang={locale}>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
      <GoogleAnalytics gaId="G-H6C3TRGPN8" />
    </html>
  );
}
