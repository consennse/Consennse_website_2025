
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import { GoogleAnalytics } from '@next/third-parties/google'
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//         {/* ⁠ <head>
//           <link rel='icon' href='/favicon.ico' sizes='any' />
//           </head> ⁠ */}

//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         {children}
//       </body>
//       <GoogleAnalytics gaId="G-H6C3TRGPN8" />
//     </html>
//   );
// }
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

const supportedLocales = ['en', 'de']; // extend if needed

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const lang = supportedLocales.includes(params.locale) ? params.locale : 'en';

  return (
    <html lang={lang}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <GoogleAnalytics gaId="G-H6C3TRGPN8" />
      </body>
    </html>
  );
}
