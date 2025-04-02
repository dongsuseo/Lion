'use client'
import React from 'react';
import RootHeader from './components/RootHeader';
import RootFooter from './components/RootFooter';
// import './globals.css';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <RootHeader />
                {children}
                <RootFooter />
            </body>
        </html>
    );
}