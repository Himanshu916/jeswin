
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Signup from "./components/Signup"
import Home from "./components/Home"
import Login from './components/Login';
import Onboarding from './components/Onboarding';
import PrivateRoute from './components/PrivateRoute';
import UserCategory from './components/UserCategory';
function App() {
  return (
    <>
    
   <Routes>
    <Route path="/"  >
      <Route path="/" element={<Onboarding/>} ></Route>
      <Route path="/category" element={<UserCategory/>} >
    </Route>
    </Route>
      <Route path="/signup/:category" element={<Signup/>} />
      <Route path="/login" element={<Login/>} />
      <PrivateRoute path="/home/*" element={<Home/>} />
   </Routes>
   </>
  );
}

export default App;
