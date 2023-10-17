import "./App.css";
import { useState } from "react";
import workouts from "./json_data/workouts.json";
import Home from "./components/Home";
import Blog from "./components/Blog";
import Training from "./components/Training";
import Explore from "./components/Explore";
import Nutrition from "./components/Nutrition";
import Community from "./components/Community";
import Login from "./components/Login";
import Sign from "./components/Sign";
import Navbar from "./components/Navbar";
import { navbar_data } from "./navbar_data";

const App = () => {
  const [nav_id, setNav_id] = useState(1);
  const [workout_id, setWorkout_id] = useState(1);

  const activeSession = (id) => {
    setNav_id(id);
  };

  const workout = (workout_id) => {
    setNav_id(3);
    setWorkout_id(workout_id);
  };

  return (
    <div className="back">
      <Navbar data={navbar_data} active={activeSession} active_id={nav_id} />

      {nav_id === 1 && (
        <Home workouts={workouts} started={activeSession} explore={workout} />
      )}
      {nav_id === 2 && <Training workouts={workouts} explore={workout} />}
      {nav_id === 3 && <Explore workout_id={workout_id} workouts={workouts} />}
      {nav_id === 4 && <Nutrition />}
      {nav_id === 5 && <Community />}
      {nav_id === 6 && <Blog />}
      {nav_id === 7 && <Login />}
      {nav_id === 8 && <Sign />}
    </div>
  );
};

export default App;
