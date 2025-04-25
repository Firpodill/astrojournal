'use client';

import { AppProviders } from '../contexts/AppProviders';
import { ReactNode } from 'react';
import '../styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>AstroJournal - Your Cosmic Journey</title>
        <meta name="description" content="Track your daily journey with cosmic insights and astrological guidance" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-deep-space text-starlight min-h-screen">
        <AppProviders>
          {children}
        </AppProviders>
      </body>
    </html>
  );
}
