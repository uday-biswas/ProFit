import './App.css';
import {useState} from 'react';
import Home from './components/Home';
import Blog from './components/Blog';
import Training from './components/Training';
import Nutrition from './components/Nutrition';
import Community from './components/Community';
import Login from './components/Login';
import Sign from './components/Sign';
import Navbar from './components/Navbar';
import {navbar_data} from './navbar_data';

const App = () => {

  const [nav_id, setNav_id] = useState(1);

  const activeSession = (id) => {
      setNav_id(id);
  }

  return(
   <div className="back">
    <Navbar data={navbar_data} active={activeSession}/>
    
      {nav_id === 1 && <Home started={activeSession}/>}
      {nav_id === 2 && <Training />}
      {nav_id === 3 && <Nutrition />}
      {nav_id === 4 && <Community />}
      {nav_id === 5 && <Blog />}
      {nav_id === 6 && <Login />}
      {nav_id === 7 && <Sign />}
   </div>
  )
}

export default App;