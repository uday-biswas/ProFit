import React from 'react';
import { GiGymBag, GiHamburgerMenu } from 'react-icons/gi';
import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = (props) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        setIsMenuOpen(false);
    }, [props.isMenu]);

    const toggleMenu = (event) => {
        event.stopPropagation();
        setIsMenuOpen(!isMenuOpen);
        console.log(`toggled to ${isMenuOpen}`);
    };

    return (
        <nav className="bg-blue-500 py-4 h-12">
            <div className="container mx-auto flex justify-between" onClick={() => setIsMenuOpen(false)}>
                <div className="flex space-x-3 text-white text-2xl font-bold"><div>ProFit</div><GiGymBag className="relative top-1" /></div>
                <div className="small"><GiHamburgerMenu onClick={toggleMenu}/> </div>
                <div className={`${isMenuOpen && "open"} hidden`}>
                {/* <div className='open absolute right-0'> */}
                    {props.data.map((item) => (
                        <button
                            key={item.id}
                            className="text-white font-bold hover:text-blue-700 transition duration-300 ease-in-out"
                            onClick={() => props.active(item.id)}
                        >
                            {item.id===props.active_id ? <span className="text-blue-800">{item.name}</span> : item.name}
                        </button>
                    ))}
                </div>

                {/* Centered Buttons */}
                <div className="big flex item-center space-x-4">
                    {props.data.slice(0, 6).map((item) => (
                        <button
                            key={item.id}
                            className="text-white font-bold hover:text-blue-700 transition duration-300 ease-in-out"
                            onClick={() => props.active(item.id)}
                        >
                            {item.id===props.active_id ? <span className="text-blue-800">{item.name}</span> : item.name}
                        </button>
                    ))}
                </div>
                {/* Right-Aligned Buttons */}
                <div className="flex big items-center space-x-4">
                {props.data.slice(6, 8).map((item) => (
                        <button
                            key={item.id}
                            className="text-white font-bold hover:text-blue-700 transition duration-300 ease-in-out"
                            onClick={() => props.active(item.id)}
                        >
                            {item.id===props.active_id ? <span className="text-blue-800">{item.name}</span> : item.name}
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
