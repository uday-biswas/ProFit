import React from 'react'
import { NavLink } from 'react-router-dom'
import { VscMenu } from 'react-icons/vsc'
import { GiGymBag } from 'react-icons/gi'
import { toast } from 'react-hot-toast'

const Navbar = ({isLoggedIn, isMenuOpen, setIsLoggedIn, toggleMenu}) => {
  return (
    <nav className="w-full h-16">
        <div className="z-10 bg-blue-500 p-1 py-4 flex fixed justify-between w-full h-16">
          <NavLink
            to="/"
            className="flex space-x-3 !text-white text-2xl font-bold"
          >
            <div>ProFit</div>
            <GiGymBag className="relative top-1" />
          </NavLink>
          <div className="small">
            <VscMenu className="hover:cursor-pointer" onClick={toggleMenu} />
          </div>
          <div className={`${isMenuOpen && "open"} hidden`}>
            <NavLink
              to="/"
              className="text-white text-center border-b-[1px] border-blue-500 font-bold hover:text-blue-700 w-[130px] m-auto p-1 transition duration-300 ease-in-out"
            >
              Home
            </NavLink>
            <NavLink
              to="/training"
              className="text-white text-center border-b-[1px] border-blue-500 font-bold hover:text-blue-700 w-[130px] m-auto p-1 transition duration-300 ease-in-out"
            >
              Training
            </NavLink>
            <NavLink
              to="/explore"
              className="text-white text-center border-b-[1px] border-blue-500 font-bold hover:text-blue-700 w-[130px] m-auto p-1 transition duration-300 ease-in-out"
            >
              Explore
            </NavLink>
            <NavLink
              to="/nutrition"
              className="text-white text-center border-b-[1px] border-blue-500 font-bold hover:text-blue-700 w-[130px] m-auto p-1 transition duration-300 ease-in-out"
            >
              Nutrition
            </NavLink>
            <NavLink
              to="/community"
              className="text-white text-center border-b-[1px] border-blue-500 font-bold hover:text-blue-700 w-[130px] m-auto p-1 transition duration-300 ease-in-out"
            >
              Community
            </NavLink>
            <NavLink
              to="/blog"
              className="text-white text-center border-b-[1px] border-blue-500 font-bold hover:text-blue-700 w-[130px] m-auto p-1 transition duration-300 ease-in-out"
            >
              News
            </NavLink>
            {!isLoggedIn && (
              <NavLink
                to="/login"
                className="text-white text-center border-b-[1px] border-blue-500 font-bold hover:text-blue-700 w-[130px] m-auto p-1 transition duration-300 ease-in-out"
              >
                Login
              </NavLink>
            )}
            {!isLoggedIn && (
              <NavLink
                to="/sign"
                className="text-white text-center font-bold hover:text-blue-700 w-[130px] m-auto p-1 transition duration-300 ease-in-out"
              >
                SignUp
              </NavLink>
            )}
            {isLoggedIn && (
              <div
                onClick={() => {
                  setIsLoggedIn(false);
                  toast.success("Logged out successfully");
                }}
                className="text-white text-center font-bold hover:text-blue-700 w-[130px] m-auto p-1 transition duration-300 ease-in-out"
              >
                Logout
              </div>
            )}
          </div>

          {/* Centered Buttons */}
          <div className="big flex item-center space-x-4">
            <NavLink
              to="/"
              className="text-white font-bold hover:text-blue-700 transition duration-300 ease-in-out"
            >
              Home
            </NavLink>
            <NavLink
              to="/training"
              className="text-white font-bold hover:text-blue-700 transition duration-300 ease-in-out"
            >
              Training
            </NavLink>
            <NavLink
              to="/explore"
              className="text-white font-bold hover:text-blue-700 transition duration-300 ease-in-out"
            >
              Explore
            </NavLink>
            <NavLink
              to="/nutrition"
              className="text-white font-bold hover:text-blue-700 transition duration-300 ease-in-out"
            >
              Nutrition
            </NavLink>
            <NavLink
              to="/community"
              className="text-white font-bold hover:text-blue-700 transition duration-300 ease-in-out"
            >
              Community
            </NavLink>
            <NavLink
              to="/blog"
              className="text-white font-bold hover:text-blue-700 transition duration-300 ease-in-out"
            >
              News
            </NavLink>
          </div>
          {/* Right-Aligned Buttons */}
          <div className="flex big items-center space-x-4">
            {!isLoggedIn && (
              <NavLink
                to="/login"
                className="text-white font-bold hover:text-blue-700 transition duration-300 ease-in-out"
              >
                Login
              </NavLink>
            )}
            {!isLoggedIn && (
              <NavLink
                to="/sign"
                className="text-white font-bold hover:text-blue-700 transition duration-300 ease-in-out"
              >
                SignUp
              </NavLink>
            )}
            {isLoggedIn && (
              <NavLink
                to="/dashboard"
                className="text-white font-bold hover:text-blue-700 transition duration-300 ease-in-out"
              >
                Dashboard
              </NavLink>
            )}
            {isLoggedIn && (
              <div
                onClick={() => {
                  setIsLoggedIn(false);
                  toast.success("Logged out successfully");
                }}
                className="text-white font-bold cursor-pointer hover:text-blue-700 transition duration-300 ease-in-out"
              >
                Logout
              </div>
            )}
          </div>
        </div>
      </nav>
  )
}

export default Navbar