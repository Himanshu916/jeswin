import axios from 'axios'
import React,{useState} from 'react'
import { useAuth } from '../contexts/authContext'
import { useNavigate } from "react-router-dom"

const AddStock = () => {
    const initialState = {
        name:"",
        price:"",
        quantity:0
    }
const [details,setDetails] = useState(initialState)
const navigate = useNavigate();

const {token} = useAuth();
    const addProduct = async(e)=>
    {
        e.preventDefault();
        console.log(details,token)
        try{
           const response =  await axios.post("https://tranquil-escarpment-64779.herokuapp.com/seller/add",details,{headers:{"x-access-token":token}})
           navigate("/home")
            console.log(response)
        }catch(error)
        {
            console.log(error)
        }
    }
    return (
        <div>
        <h2 style={{textAlign:"center",fontWeight:"500",color:"black",padding:"0 0 1rem 0",fontSize:"1rem"}}>Add Stock</h2>
        <form onSubmit={addProduct} style={{height:"80vh"}} className="signup-form" action="">
        <input value={details.name} onChange={(e)=>setDetails(state=>({...state,name:e.target.value}))}  className="signup-form--input" placeholder="Product Name" type="text" />
        <input value={details.price} onChange={(e)=>setDetails(state=>({...state,price:e.target.value}))} className="signup-form--input" placeholder="Add Selling Price" type="text" />
        
        <div style={{flexDirection:"column",justifyContent:"flex-start"}} className="product-detail-quantity" >
        <h3 style={{color:"lightgray",fontWeight:"500"}}>Add Quantity</h3>
                      <div style={{marginTop:"20px"}}>
                          <button type="button" disabled={details.quantity===0} onClick={()=>setDetails(state=>({...state,quantity:state.quantity-1}))} style={{marginLeft:"0"}} >-</button>
                        {details.quantity}
                       <button type="button" onClick={()=>setDetails(state=>({...state,quantity:state.quantity+1}))} >+</button>
                      
                      </div>
                  </div>
        <textarea className="signup-form--input" placeholder="Description"  name="" id="" cols="30" rows="8">

        </textarea>
        <div style={{margin:"2rem 0"}} className="buttons">
                    <button type="submit" style={{fontSize:"1.2rem",fontWeight:"600",letterSpacing:"1px",borderRadius:"5px",padding:"1.2rem"}}  >Add Product In Stock</button>
        </div>

        </form>
         
        </div>
    )
}

export default AddStock
