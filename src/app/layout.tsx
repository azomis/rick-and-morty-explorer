import './globals.css';

import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import { Header } from '@/shared/ui';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Rick and Morty Explorer',
  description: 'Rick & Morty fan app by azomis',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-green-200 via-yellow-200 to-purple-200">
          <Header />
          <main className="flex-1 max-w-6xl mx-auto p-6">{children}</main>
          <footer className="w-full bg-purple-700 text-center py-4 text-yellow-200 font-bold border-t-4 border-black shadow-[0_-4px_0_0_#000]">
            © {new Date().getFullYear()} Rick & Morty Explorer App by azomis
          </footer>
        </div>
      </body>
    </html>
  );
}
