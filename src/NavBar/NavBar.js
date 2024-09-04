import React, { useState, useEffect } from 'react';
import DarkMode from "../DarkMode/DarkMode";
import { IoMdMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import logoPrimary from "../assets/logoPrimary.png";
import logoDark from "../assets/logoDark.png";

const navLinks = [
    {
        id: 1,
        name: "About Us",
        link: "#AboutUs"
    },
    {
        id: 2,
        name: "Nos Services",
        link: "#main"
    },
    {
        id: 3,
        name: "Nos Offres",
        link: "#main"
    },
];

const NavBar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleMenu = () => setShowMenu(!showMenu);

    useEffect(() => {
        // Fonction pour mettre à jour l'état du thème en fonction de la classe "dark"
        const updateTheme = () => {
            const theme = localStorage.getItem('theme') || 'light';
            setIsDarkMode(theme === 'dark');
        };

        // Vérification initiale
        updateTheme();

        // Observer les changements du thème
        const observer = new MutationObserver(updateTheme);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class'],
        });

        // Nettoyage à la fin
        return () => observer.disconnect();
    }, []);

    return (
        <div id="NavBar">
            <div className='container py-2 md:py-1'>
                <div className='flex justify-between items-center text-primary dark:text-white'>
                    {/* Section Logo */}
                    <div className='flex items-center gap-3'>
                        <img src={isDarkMode ? logoPrimary : logoDark } alt="Logo" className='h-24 md:h-32 transition-all' />
                        <p className='text-xl md:text-2xl'>
                            <span className='font-bold text-2xl md:text-3xl text-blueLogo'>AY </span>WEB
                        </p>
                    </div>

                    {/* Section Menu Desktop */}
                    <nav className='hidden md:block'>
                        <ul className='flex justify-center items-center'>
                            {navLinks.map(({ id, name, link }) => (
                                <li key={id} className='py-4'>
                                    <a href={link} className='px-4 font-semibold transition-all duration-200 hover:text-second'>
                                        {name}
                                    </a>
                                </li>
                            ))}
                            {/* Dark Mode features */}
                            <DarkMode />
                        </ul>
                    </nav>

                    {/* Menu mobile */}
                    <div className='md:hidden block'>
                        <div className='flex items-center gap-4'>
                            <DarkMode />
                            {showMenu ? (
                                <RxCross1 className='cursor-pointer' size={30} onClick={toggleMenu} />
                            ) : (
                                <IoMdMenu className='cursor-pointer' size={30} onClick={toggleMenu} />
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Menu Mobile */}
            <div className={`md:hidden flex flex-col items-center bg-gray-100 dark:bg-gray-500 dark:text-white overflow-hidden transition-navbar-max-height duration-500 ease-in-out ${showMenu ? 'max-h-screen' : 'max-h-0'}`}>
                <ul className='flex flex-col items-center w-full'>
                    {navLinks.map(({ id, name, link }) => (
                        <li key={id} className='py-4 w-full text-center'>
                            <a href={link} className='w-full block py-2 transition-all duration-200 hover:text-second'>
                                {name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default NavBar;
