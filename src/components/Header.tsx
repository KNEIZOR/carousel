"use client"
import Image from "next/image";
import React from "react";

const Header = () => {
    return (
        <header className="flex justify-between items-center h-16">
            <div className="logo flex w-36 justify-around items-center">
                <Image src="/logo-big.png" alt="logo" width={28} height={28} />
                <p>STEMPS</p>
            </div>
            <div className="menu flex w-60 justify-between">
                <p>О школе</p>
                <p>Курсы</p>
                <p>Библиотека</p>
            </div>
            <div className="profile flex items-center justify-around w-28">
                <p>Вход</p>
                <Image src="/Exclude.png" alt="logo" width={30} height={28} />
            </div>
            <div className="menu-mobile">Меню</div>
        </header>
    );
};

export default Header;
