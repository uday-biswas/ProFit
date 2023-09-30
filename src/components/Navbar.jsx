import React from 'react';
import { GiGymBag } from 'react-icons/gi';

const Navbar = (props) => {
    return (
        <nav className="bg-blue-500 py-4">
            <div className="container mx-auto flex justify-between">
                <div className="flex space-x-3 text-white text-2xl font-bold"><div>ProFit</div><GiGymBag className="relative top-1" /></div>
                <div className="flex justify-between w-4/6 space-x-4">
                    {/* Centered Buttons */}
                    <div className="flex item-center space-x-4">
                        {props.data.slice(0, -2).map((item) => (
                            <button
                                key={item.id}
                                className="text-white font-bold hover:text-blue-700 transition duration-300 ease-in-out"
                                onClick={() => props.active(item.id)}
                            >
                                {item.name}
                            </button>
                        ))}
                    </div>
                    {/* Right-Aligned Buttons */}
                    <div className="flex items-center space-x-4">
                        <button
                            className="text-white font-bold hover:text-blue-700 transition duration-300 ease-in-out"
                            onClick={() => props.active(6)} // Assuming "Login" has an id of 5
                        >
                            Login
                        </button>
                        <button
                            className="text-white font-bold hover:text-blue-700 transition duration-300 ease-in-out"
                            onClick={() => props.active(7)} // Assuming "Sign Up" has an id of 6
                        >
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
