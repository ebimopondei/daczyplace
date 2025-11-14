import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";

import localFont from 'next/font/local'

const sans = Source_Sans_3({
  subsets: ['latin'],
  variable: "--font-sans",
  display: "swap"
})

const vogera = localFont({
  src: './fonts/vogera/vogera.ttf',
  variable: "--font-vogera",
  display: "swap"
})

export const metadata: Metadata = {
  title: "Dauzy Place - Your Home Away From Home",
  description: "Experience comfort and elegance in our curated short-term rental apartments, designed for modern living.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${vogera.variable} ${sans.variable} antialiased`}>
      <body
        className=""
      >
        {children}
      </body>
    </html>
  );
}
