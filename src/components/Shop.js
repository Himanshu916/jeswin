import React,{useState,useEffect} from 'react'
import { useNavigate,useParams } from "react-router-dom"
import axios from 'axios'
import { useAuth } from '../contexts/authContext'
 const Shop = () => {
     const [shopProducts,setShopProducts] = useState([])
     const {id} = useParams();
    
     const navigate = useNavigate()
     const {token} = useAuth();
     
     useEffect(()=>
     {
        
         (async()=>
         {
            
             try{
                const response = await axios.get("https://tranquil-escarpment-64779.herokuapp.com/seller/products/"+id,{headers:{"x-access-token":token}})
                 
                 if(response.status===200)
                 setShopProducts(response.data)
             }catch(error)
             {
                    console.log(error.response.data.message)
             }

         })()
     },[id])
  
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
                <input placeholder="search for products" className="searchBar" type="search" name="" id="" />
        </div>
       <div className="home-bottom">
               
                <div className="home-cards">
                {
                    shopProducts.map(product=>
                    {
                        return (
                            <div key={product.id} className="home-card">
                        <div style={{width:"50px",height:"60px",backgroundColor:"red"}}>
                            
                        </div>
                        <div className="home-card--content">
                            <h2>{product.name}</h2>
                            <h3> {product.price} </h3>
                            <div className="buttons">
                                <button onClick={()=>navigate(`/home/product/${product.id}`)}>view </button>
                                <button> Call</button>
                            </div>
                        </div>
                    </div>
                        )
                    })
                }
                </div>
            </div>
      </>
    )
}

export default Shop


