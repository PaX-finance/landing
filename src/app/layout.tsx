import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import './globals.css';
import { WebVitals } from './webVitals';

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
      'en-GB': '/',
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
    images: ['https://rooterpay.com/icon.png'],
  },
  openGraph: {
    title: 'Rooter',
    description:
      'A smart payment terminal that cuts costs and boosts loyalty with every transaction',
    url: 'https://rooterpay.com',
    siteName: 'Rooter',
    images: [
      {
        url: 'https://rooterpay.com/icon.png', // Must be an absolute URL
        width: 300,
        height: 300,
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`${spaceGrotesk.className} antialiased scroll-smooth m-0 p-0 motion-reduce:transform-none bg-[#fdf3ec]`}
      >
        {children}
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID as string} />
        <WebVitals />
      </body>
    </html>
  );
}
