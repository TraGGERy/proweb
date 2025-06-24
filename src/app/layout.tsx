import { ClerkProvider } from '@clerk/nextjs';
import { Inter } from 'next/font/google';
import './globals.css';
import ChatButton from '@/components/ChatButton';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'PROWEB Zimbabwe',
  description: 'Professional Women in Business Zimbabwe',
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
