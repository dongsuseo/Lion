'use client'
import React from 'react';
import Link from 'next/link';

export default function Page() {
    return (
        <header>
            <h1>My Application</h1>
            <nav>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/menus">menus</Link></li>
                <li><Link href="/admin">dashboard</Link></li>
                <li><Link href="/login">login</Link></li>
            </nav>
        </header>
    );
}