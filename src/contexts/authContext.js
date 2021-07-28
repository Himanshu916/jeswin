import React , {useState,useEffect,createContext,useContext} from "react"
import {auth} from "../config/firebase"


const AuthContext = createContext();

const AuthProvider  = ({children})=>
{
    const [user,setUser] = useState("himanshu");
    const [loading,setLoading] = useState(true)

const signUp = (email,password)=>
{

    console.log(email,password,"kya h ye")
   return auth.createUserWithEmailAndPassword(email,password)

}

const signIn = (email,password)=>
{
    return auth.signInWithEmailAndPassword(email,password)
}

const signOut=()=>
{
    return auth.signOut()
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
        signOut
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