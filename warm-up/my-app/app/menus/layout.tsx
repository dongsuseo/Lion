'use client'
import React from 'react';
// import './globals.css';
import Basket from './components/Basket';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                {children}
                <Basket/>
            </body>
        </html>
    );
}