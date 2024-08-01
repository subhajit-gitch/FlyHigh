import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Login from './component/Login';
import Register from './component/Register';
import Deals from './component/Deals';
import CheckIn from './component/CheckIn';
import Details from './component/Details';




function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}>Home</Route>
        <Route exact path="/About" element={<About/>}>About</Route>
        <Route exact path="/Login" element={<Login/>}>Login</Route>
        <Route exact path="/Register" element={<Register/>}>Register</Route>
        <Route exact path="/Deals" element={<Deals/>}>Deals</Route>
        <Route exact path="/CheckIn" element={<CheckIn/>}>CheckIn</Route>
        <Route exact path="/Details" element={<Details/>}>Details</Route>
        
      </Routes>
    </BrowserRouter>
    <div className="text-wrapper">
        </div>
    </div>
  );
}

export default App;
