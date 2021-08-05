import React,{useState,useEffect} from 'react'
// import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useAuth } from '../contexts/authContext';
import {useNavigate,useParams} from "react-router-dom"
const Signup = () => {
  const navigate=useNavigate();
  const {category} = useParams()
  console.log(category)
  const initialState = {
    fullName:"",
    email:"",
    phone:"",
    shopName:"",
    shopAddress:"",
    password:"",
    confirmPassword:""
  }
const [details,setDetails] = useState(initialState)
const [error,setError] = useState("")
const [loading,setLoading] = useState(false)
const {fullName,email,phone,shopName,shopAddress,password,confirmPassword} = details;
const {user,signUp,isUserLoggedIn} = useAuth();



useEffect(()=>
{
  if(isUserLoggedIn)
  navigate("/home")

},[isUserLoggedIn])

const submitHandler=(e)=>
{

    e.preventDefault()
    console.log(email,password,"to signup")
    if(password !== confirmPassword)
      setError("Password does not match !");
      signUp(fullName,phone,shopName,shopAddress,email,password,category);
   

}


    return (
        <div >
        {error && error}
        {/* {loading && "ho gaya"} */}
        {/* {JSON.stringify(user)} */}
       
        <form onSubmit={submitHandler} className="signup-form" action="">
        <div>
            <p style={{fontSize:"1.2rem",fontWeight:"500"}} >Welcome Buyer</p>
        </div>
        <div>
          <input onChange={(e)=>setDetails(state=>({...state,fullName:e.target.value}))} value={fullName} className="signup-form--input" placeholder="Full Name" type="text" />
          <p className="helperText">Enter Your Full Name</p>
        </div>
        <div>
          <input onChange={(e)=>setDetails(state=>({...state,email:e.target.value}))} value={email}  className="signup-form--input" placeholder="Email" type="email" />
          <p className="helperText">Enter Your Email</p>
        </div>
        <div>
          <input onChange={(e)=>setDetails(state=>({...state,phone:e.target.value}))} value={phone} className="signup-form--input" placeholder="Phone Nmber" type="text" />
          <p className="helperText">Enter Your Phone Number</p>
        </div>
        <div>
          <input onChange={(e)=>setDetails(state=>({...state,shopName:e.target.value}))} value={shopName} className="signup-form--input" placeholder="Shop Name" type="text" />
          <p className="helperText">Enter Your Shop Name</p>
        </div>
        <div>
          <input onChange={(e)=>setDetails(state=>({...state,shopAddress:e.target.value}))} value={shopAddress}  className="signup-form--input" placeholder="Shop Address" type="text" />
          <p className="helperText">Enter Your Shop Address</p>
        </div>
        <div>
          <input onChange={(e)=>setDetails(state=>({...state,password:e.target.value}))} value={password} className="signup-form--input" placeholder="Create Password" type="password" />
          <p className="helperText">CreateYour Password</p>
        </div>
        <div>
          <input onChange={(e)=>setDetails(state=>({...state,confirmPassword:e.target.value}))} value={confirmPassword} className="signup-form--input" placeholder="Confirm Password" type="password" />
          <p className="helperText">Confirm Your Full Password</p>
        </div>
        <Button type="submit" onSubmit={submitHandler} style={{color:"white",padding:"10px",backgroundColor:"var(--primary-color)"}} variant="contained" color="primary">
       Sign Up
      </Button>
        </form>
          
       
        </div>
    )
}

export default Signup