import React , {useState,useEffect,createContext,useContext} from "react"
import {auth} from "../config/firebase"
import axios from "axios"


const AuthContext = createContext();

const AuthProvider  = ({children})=>
{
    const {isUserLogIn,token:savedToken,role:Role} = JSON.parse(localStorage?.getItem("login"))||{isUserLogIn:false,token:null,role:""};
    const [isUserLoggedIn,setUserLoggedIn] = useState(isUserLogIn);
    const [token,setToken] = useState(savedToken);
    const [user,setUser] = useState({});
    const [loading,setLoading] = useState(true)
    const [role,setRole] = useState(Role);
   
  
    useEffect(()=>
    {
        (async()=>
        {
            
            console.log(token,role,"kya haal")
            if(token && role==="buyer")
            {
                try{
                
                    const buyerResp =await axios.get("https://tranquil-escarpment-64779.herokuapp.com/buyer",{headers:{"x-access-token":token}})
                    const re= await axios.get("https://tranquil-escarpment-64779.herokuapp.com/cart/products",{headers:{"x-access-token":token}});
                    console.log(buyerResp)
                        const user = {...buyerResp.data,cartItems:re.data}
                        console.log(re)
                        setUser(user)
                      
                    
                }
                catch(error)
                {
                    console.log(error)
                }
            }
            else
            {
               setUser("seller")
            }
        
        })()
    },[token,role])
console.log(user,"thik h ji")
const signUp = async(fullname,phone,shopName,shopAddress,email,password,category)=>
{
    
    try
    {
        const response = await axios.post(`https://tranquil-escarpment-64779.herokuapp.com/${category}/signup`,{fullname,phone,shopName,shopAddress,email,password})
        console.log(response)
        if(response.status===200)
        {
            localStorage?.setItem("login",JSON.stringify({isUserLogIn:true,token:response.data.accessToken}))
            setUserLoggedIn(true);
            setToken(response.data.accessToken);
            setRole(response.data.result.role)
            
        }
       
      
    }catch(error)
    {
        console.log(error.response.data.message)
    }

    
}

const signIn = async (email,password)=>
{
    try
    {
         const response = await axios.post("https://tranquil-escarpment-64779.herokuapp.com/signin",{email,password})
           
            if(response.status===200)
            {
                localStorage?.setItem("login",JSON.stringify({isUserLogIn:true,token:response.data.accessToken,role:response.data.result.role}))
                setUserLoggedIn(true);
                setToken(response.data.accessToken);
                setRole(response.data.result.role)
                
            }
           
    }catch(error)
    {
        console.log(error.response.data.message)
    }

   
}

const signOut=()=>
{
    localStorage?.removeItem("login");
      setUserLoggedIn(false)
      setToken(null)
      setUser({})
      setRole("")
   
}
useEffect(()=>
{
    const unSubscribe = auth.onAuthStateChanged(user=>{
        setUser(user)
        setLoading(false)
    });

    return unSubscribe;
},[])
const value={
        user,
        signUp,
        signIn,
        signOut,
        isUserLoggedIn,
        token,
        role
    }

    return (
        <AuthContext.Provider value={value}>
            { !loading && children}
        </AuthContext.Provider>

    )
}


export default AuthProvider;

export const useAuth = ()=>
{
    return useContext(AuthContext);
}