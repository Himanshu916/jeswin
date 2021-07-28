import React from 'react'
import { useAuth } from '../contexts/authContext'
import { useNavigate } from "react-router-dom"
import HomeLanding from './HomeLanding';
import Navigation from './Navigation';
import {Routes,Route} from "react-router-dom"
import Shop from "./Shop"
import Product from "./Product"
import Cart from "./Cart"
const Home = () => {
const {signOut} = useAuth();
const navigate = useNavigate();


async function clickHandler(){

    try{
        await signOut();
        navigate("/login")

    }catch{
        console.log("not logout")
    }
    

}

    return (
        <div>
            <Navigation/>
            <Routes>
                <Route path="/" element={<HomeLanding/>} />
                <Route path="/shop" element={<Shop/>} />
                <Route path="/product" element={<Product/>} />
                <Route path="/cart" element={<Cart/>} />
            </Routes> 
            Home
            <button onClick={clickHandler}>Sign out</button>
        </div>
    )
}

export  default Home