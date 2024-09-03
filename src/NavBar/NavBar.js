import React from 'react'
import DarkMode from "../DarkMode/DarkMode"
import { IoMdMenu } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import logoPrimary from "../assets/logoPrimary.png"
import logoDark from "../assets/logoDark.png"

const navLinks = [
    {
        id : 1,
        name : "About Us",
        link : "#main"
    },
    {
        id : 2,
        name : "Nos Services",
        link : "#main"
    },
    {
        id : 3,
        name : "Nos Offres",
        link : "#main"
    },
]

const NavBar = () => {
    const [showMenu, setShowMenu] = React.useState(false);
    const toggleMenu = () => setShowMenu(!showMenu);
    return(
        <div>
            <div className='container py-2 md:py-1'>
                <div className = 'flex justify-between items-center text-primary dark:text-white'>
                    {/* logo section */}
                    <div className='flex items-center gap-3'>
                        <img src={logoDark} alt="Logo" className='h-20 md:h-20 transition-all' />
                        <p className='text-2xl'>
                            AY <span className='font-bold text-l'>WEB </span>
                        </p>
                    </div>

                    {/* desktop Menu Section */}
                    <nav className='hidden md:block'>
                        <ul className='flex justify-center items-center'>
                            {navLinks.map(({id, name, link}) => {
                                return (
                                <li key={id} className='py-4'>
                                    <a href={link}
                                    className=' px-4 font-semibold transition-all duration-200 hover:text-second'>
                                        {name}
                                    </a>
                                </li>
                                )
                            })}
                            {/* Darke Mode features */}
                            < DarkMode />
                        </ul>
                    </nav>
                
                
                    {/* mobile view navbar */}
                    <div className='md:hidden block'>
                        <div className='flex items-center gap-4'>
                            < DarkMode/>

                            {
                                showMenu ? (
                                    <RxCross1 className='cursor-pointer'  size={30} onClick={toggleMenu}/>
                                ) : (
                                    <IoMdMenu className='cursor-pointer'  size={30} onClick={toggleMenu}/>
                                )
                            }
                        </div>
                    </div>

                    
                </div>
            </div>
            {/* Mobile Menu  */}
            <div className={`md:hidden flex flex-col items-center bg-gray-100 dark:bg-gray-500 dark:text-white overflow-hidden transition-navbar-max-height duration-500 ease-in-out ${showMenu ? 'max-h-screen' : 'max-h-0'}`}>
                <ul className='flex flex-col items-center w-full'>
                    {navLinks.map(({ id, name, link }) => {
                        return (
                            <li key={id} className='py-4 w-full text-center'>
                                <a href={link}
                                    className='w-full block py-2 transition-all duration-200 hover:text-second'>
                                    {name}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div> 
    )
}

export default NavBar