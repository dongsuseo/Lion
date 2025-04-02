'use client'
import React from 'react';

type MenuPageProps = {
    params: {
        id: string;
    };
}

const MenuPage: React.FC<MenuPageProps> = ({params}) => {
    const {id} = params
    return (
        <div>
            상세페이지: {id}
        </div>
    );
};

export default MenuPage;