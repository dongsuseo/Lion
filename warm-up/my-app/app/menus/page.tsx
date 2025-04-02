'use client'
import React, {FC, JSX} from 'react';
import Link from 'next/link';

const MenuPage: FC = (): JSX.Element => {
    return (
        <div>
            <h1>Menu List</h1>
            <ul>
                <li><Link href="menus/1">1번 페이지</Link></li>
                <li><Link href="menus/2">2번 페이지</Link></li>
                <li><Link href="menus/3">3번 페이지</Link></li>
            </ul>
        </div>
    );
};

export default MenuPage;
