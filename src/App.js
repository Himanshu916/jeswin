
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Signup from "./components/Signup"
import Home from "./components/Home"
import Login from './components/Login';
import Onboarding from './components/Onboarding';
import PrivateRoute from './components/PrivateRoute';
function App() {
  return (
    <>
    
   <Routes>
    <Route path="/" element={<Onboarding/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/login" element={<Login/>} />
      <PrivateRoute path="/home/*" element={<Home/>} />
   </Routes>
   </>
  );
}

export default App;
