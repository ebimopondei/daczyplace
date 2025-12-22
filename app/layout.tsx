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
  
  title: "Daczy Place - Your Home Away From Home", 
  description: "Experience comfort and elegance in our curated short-term rental apartments, designed for modern living.",
  keywords: ['short-term rental', 'luxury apartments', 'serviced apartments', 'vacation rental', 'daczy place'],
  applicationName: 'Daczy Place',
  
  metadataBase: new URL('https://www.daczyplace.com'),

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    }
  },

  openGraph: {
    title: 'Daczy Place - Luxury Short-Term Rentals',
    description: 'Experience comfort and elegance in our curated short-term rental apartments, designed for modern living.',
    url: 'https://www.daczyplace.com',
    siteName: 'Daczy Place',
    images: [
      {
        url: '/logo/Mono-logo-4@3x.png', // Place a 1200x630 image in your /public folder
        width: 1200,
        height: 630,
        alt: 'Daczy Place Logo and a view of a luxurious apartment'
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  // 5. Twitter Card
  twitter: {
    card: 'summary_large_image', // Use this for a large image preview
    title: 'Daczy Place',
    description: 'Your Home Away From Home. Book your short-term stay today!',
    site: '@YourTwitterHandle', // If you have a Twitter account
    creator: '@YourTwitterHandle',
    images: ['/image.svg'], // Place a 1200x675 image in your /public folder
  },
  
  // 6. Authors/Branding
  authors: [{ name: 'Daczy Place', url: 'https://www.daczyplace.com' }],
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
