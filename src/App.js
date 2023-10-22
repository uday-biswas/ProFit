import "./App.css";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
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
import ProtectedComponent from "./components/ProtectedComponent";
import DashBoard from "./components/DashBoard";
import Navbar from "./components/Navbar";

const App = () => {
  const [workout_id, setWorkout_id] = useState(1);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = (event) => {
    event.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
    console.log(`toggled to ${isMenuOpen}`);
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const loggingIn = () => {
    setIsLoggedIn(true);
  };

  const setIsMenuCheck = () => {
    setIsMenuOpen(false);
  };

  const workoutSettingForExplore = (workout_id) => {
    setWorkout_id(workout_id);
  };

  return (
    <div className="back" onClick={setIsMenuCheck}>
      <Navbar
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        isMenuOpen={isMenuOpen}
        setIsMenuCheck={setIsMenuCheck}
        toggleMenu={toggleMenu}
      />

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
            element={
              <Explore
                workout_id={workout_id}
                workouts={workouts}
                isLoggedIn={isLoggedIn}
              />
            }
          />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="/community" element={<Community />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={<Login loggingIn={loggingIn} />} />
          <Route path="/sign" element={<Sign />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedComponent isLoggedIn={isLoggedIn}>
                <DashBoard />
              </ProtectedComponent>
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
