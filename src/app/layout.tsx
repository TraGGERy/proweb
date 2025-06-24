import { ClerkProvider } from '@clerk/nextjs';
import { Inter } from 'next/font/google';
import './globals.css';
import ChatButton from '@/components/ChatButton';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'PROWEB Zimbabwe | Professional Women in Business',
  description: 'PROWEB Zimbabwe empowers professional women in business through networking, mentorship, training, and advocacy for economic empowerment and leadership development.',
  keywords: 'PROWEB, Zimbabwe, professional women, business, mentorship, leadership, economic empowerment, networking, women in business, professional development',
  authors: [{ name: 'PROWEB Zimbabwe' }],
  creator: 'PROWEB Zimbabwe',
  publisher: 'PROWEB Zimbabwe',
  openGraph: {
    title: 'PROWEB Zimbabwe | Professional Women in Business',
    description: 'Empowering professional women in Zimbabwe through networking, mentorship, training, and advocacy for economic empowerment.',
    url: 'https://prowebzimbabwe.org',
    siteName: 'PROWEB Zimbabwe',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 600,
        alt: 'PROWEB Zimbabwe Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PROWEB Zimbabwe | Professional Women in Business',
    description: 'Empowering professional women in Zimbabwe through networking, mentorship, training, and advocacy.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://prowebzimbabwe.org',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          {children}
          <ChatButton />
        </body>
      </html>
    </ClerkProvider>
  );
}
