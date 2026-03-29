import './globals.css';

import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import TanStackProvider from '@/components/TanStackProvider/TanStackProvider';

import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'NoteHub',
  description:
    'Notehub: A modern Todo application developed as a Next.js educational project. Focused on performance and clean user experience.',

  icons: {
    icon: '/todo-icon.svg',
    shortcut: '/todo-icon.svg',
    apple: '/todo-icon.svg',
  },
  openGraph: {
    title: `NoteHub`,
    description:
      'Notehub: A modern Todo application developed as a Next.js educational project. Focused on performance and clean user experience.',
    url: `https://08-zustand-mauve-gamma.vercel.app/`,
    siteName: 'NoteHub',
    images: [
      {
        url: 'https://ac.goit.global/fullstack/react/og-meta.jpg',
        width: 1200,
        height: 630,
        alt: 'NoteHub - A modern Todo application',
      },
    ],
    type: 'article',
  },
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <TanStackProvider>
        <body>
          <Header />
          {children}
          {modal}
          <Footer />
        </body>
      </TanStackProvider>
    </html>
  );
}
