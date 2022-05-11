
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Navber from './Pages/Home/Shared/Navber';
import Login from './Pages/Login/Login';

function App() {
  return (
    <div >
      <Navber></Navber>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
