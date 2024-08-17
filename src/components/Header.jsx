import React, { useState } from 'react';
import logo from '../assets/Vector.png';  
import addIcon from '../assets/galaAdd0.png'; 
import settingsIcon from '../assets/cog.png'; 
import bellIcon from '../assets/bell.png';  
import userIcon from '../assets/Avatar.png'; 

const Header = () => {
    const [activeItem, setActiveItem] = useState('Cases');

    return (
        <header className="flex justify-between items-center p-4 bg-gray-100">
            <div className="flex items-center">
                <img src={logo} alt="Jurident Logo" className="h-8 mr-4" />
                <span className="font-bold text-gray-900 text-lg">JURIDENT</span>
            </div>
            <nav className="flex gap-8">
                {['Cases', 'Services', 'News', 'About Us'].map((item) => (
                    <a
                        key={item}
                        href="#"
                        className={`relative text-gray-900 text-base p-2 ${activeItem === item ? 'after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-yellow-500' : ''}`}
                        onClick={() => setActiveItem(item)}
                    >
                        {item}
                    </a>
                ))}
            </nav>
            <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-full cursor-pointer">
                    <img className="w-6" src={addIcon} alt="Add" />
                </div>
                <div className="flex items-center justify-center w-8 h-8 rounded-full cursor-pointer">
                    <img className="w-6" src={settingsIcon} alt="Settings" />
                </div>
                <div className="flex items-center justify-center w-8 h-8 rounded-full cursor-pointer">
                    <img className="w-6" src={bellIcon} alt="Notifications" />
                </div>
                <div className="flex items-center justify-center w-8 h-8 rounded-full cursor-pointer">
                    <img className="w-6" src={userIcon} alt="User" />
                </div>
            </div>
        </header>
    );
};

export default Header;
