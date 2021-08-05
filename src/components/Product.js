import axios from 'axios'
import React,{useState,useEffect} from 'react'
import { useCart } from '../contexts/cartContext'
import {useParams} from "react-router-dom"
import { useAuth } from '../contexts/authContext'
const Product = () => {
    const {quantity,dispatch} = useCart()
    const [product,setProduct] = useState(null)
    const {id} = useParams()
    const {token} = useAuth()
    useEffect(async() => {
        try
        {
            const response = await axios.get("https://tranquil-escarpment-64779.herokuapp.com/product/"+id,{headers:{"x-access-token":token}})
         
            if(response.status===200)
            {
                setProduct(response.data)
            }

        }catch(error)
        {
            console.log(error.response.data.message)
        }
       
    }, [id])



    return (
        <>
         <div className="shopName">
          <h2>
            R.N Enterprises Pvt Ltd
          </h2>
          <div className="whatsapp">
          <img src={require("../images/whatsappicon.png").default} alt="" /> 
          <span>Call Seller</span>
          </div>
      </div>
      <div>
          <h3 style={{fontSize:"1rem"}}>Overview</h3>
          {product && <div className="product">
              <img src="" alt="" />
              <div className="product-detail">
                  <h3> {product.name} </h3>
                  <h3 className="product-price"> {product.price} </h3>
                  <div className="product-detail-quantity" >
                      <h3>Quantity</h3>
                      <div>
                          <button onClick={()=>dispatch({type:"Decrease",payload:product})}>-</button>
                         {product.quantity}
                       <button onClick={()=>dispatch({type:"Increase",payload:product})}>+</button>
                      
                      </div>
                  </div>
                  <div className="buttons">
                    <button onClick={()=>dispatch({type:"Add",payload:product})} >Add Cart</button>
                  </div>
                  
              </div>
          </div>}
          <div className="product-detail-review" >
              <h3>Review(104)</h3>
              <div className="home-cards">
                  <div className="home-card">
                      <img src="" alt="" />
                      <div className="home-card--content">
                     <h3>Medelina</h3>
                      <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sunt autem
                      </p>
                      </div>
                      
                  </div>
                  <div className="home-card">
                      <img src="" alt="" />
                      <div className="home-card--content">
                     <h3>Irfan</h3>
                      <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sunt autem
                      </p>
                      </div>
                      
                  </div>
              </div>
             <div className="buttons">
                 <button>Need Help</button>
                 
             </div>
          </div>
          <h4 style={{textAlign:"center",margin:"1rem 0",fontWeight:"400",fontSize:".9rem"}}>See All Reviews</h4>
      </div>
        </>
        
    )
}

export default Product
