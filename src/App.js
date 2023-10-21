import "./App.css";
import { useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import { GiGymBag } from "react-icons/gi";
import { VscMenu } from "react-icons/vsc";
import workouts from "./json_data/workouts.json";
import Home from "./components/Home";
import Training from "./components/Training";
import Explore from "./components/Explore";
import Nutrition from "./components/Nutrition";
import Community from "./components/Community";
import Blog from "./components/Blog";
import Login from "./components/Login";
import Sign from "./components/Sign";
import Mainheader from "./components/Mainheader";
import PageNotFound from "./components/PageNotFound";

const App = () => {
  const [workout_id, setWorkout_id] = useState(1);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = (event) => {
    event.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
    console.log(`toggled to ${isMenuOpen}`);
  };

  const setIsMenuCheck = () => {
    setIsMenuOpen(false);
  };

  const workoutSettingForExplore = (workout_id) => {
    setWorkout_id(workout_id);
  };

  return (
    <div className="back" onClick={setIsMenuCheck}>
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
            <NavLink
              to="/login"
              className="text-white text-center border-b-[1px] border-blue-500 font-bold hover:text-blue-700 w-[130px] m-auto p-1 transition duration-300 ease-in-out"
            >
              Login
            </NavLink>
            <NavLink
              to="/sign"
              className="text-white text-center font-bold hover:text-blue-700 w-[130px] m-auto p-1 transition duration-300 ease-in-out"
            >
              SignUp
            </NavLink>
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
            <NavLink
              to="/login"
              className="text-white font-bold hover:text-blue-700 transition duration-300 ease-in-out"
            >
              Login
            </NavLink>
            <NavLink
              to="/sign"
              className="text-white font-bold hover:text-blue-700 transition duration-300 ease-in-out"
            >
              SignUp
            </NavLink>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Mainheader />}>
          <Route
            index
            element={
              <Home workouts={workouts} explore={workoutSettingForExplore} />
            }
          />
          <Route
            path="/training"
            element={
              <Training
                workouts={workouts}
                explore={workoutSettingForExplore}
              />
            }
          />
          <Route
            path="/explore"
            element={<Explore workout_id={workout_id} workouts={workouts} />}
          />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="/community" element={<Community />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign" element={<Sign />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
