import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import { WebVitals } from './webVitals';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Rooter - get more, pay less, sell smarter',
  description:
    'A smart payment terminal that cuts costs and boosts loyalty with every transaction',
  applicationName: 'Rooter',
  referrer: 'origin-when-cross-origin',
  creator: 'OxMarco',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL('https://rooterpay.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/',
    },
  },
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon-precomposed.png',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rooter',
    description:
      'A smart payment terminal that cuts costs and boosts loyalty with every transaction',
    siteId: '1467726470533754880',
    creator: '@RooterPay',
    images: ['https://nextjs.org/og.png'],
  },
  openGraph: {
    title: 'Rooter',
    description:
      'A smart payment terminal that cuts costs and boosts loyalty with every transaction',
    url: 'https://rooterpay.com',
    siteName: 'Rooter',
    images: [
      {
        url: 'https://nextjs.org/og.png', // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>Rooter</title>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID as string} />
      </head>
      <body
        className={`${spaceGrotesk.className} antialiased scroll-smooth m-0 p-0 motion-reduce:transform-none bg-[#fdf3ec]`}
      >
        <WebVitals />
        {children}
      </body>
    </html>
  );
}
