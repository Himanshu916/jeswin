import React,{useEffect,useState} from 'react'
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useAuth } from '../contexts/authContext'
export const HomeLanding = () => {
    const [shops,setShops] = useState([])
    const {token} = useAuth()
    const navigate = useNavigate()
    useEffect(()=>
    {
        
        (async ()=>
        {
            try
            {
                const response =await axios.get("https://tranquil-escarpment-64779.herokuapp.com/sellers",{headers:{"x-access-token":token}})
               
                setShops(response.data)
            }catch(error)
            {

            }
        })()
    },[token])
    return (
       <>
       <div>
                <h3 className="greeting">
                    Hi Prakash
                </h3>
                <p className="interacting">
                    What are you looking for today ?
                </p>

            </div>
            <div>
                <input placeholder="search for products" className="searchBar" type="search" name="" id="" />
            </div>
            <div className="home-bottom">
                <div className="buttons">
                    <button>Sellers</button>
                    <button>My Orders</button>
                </div>
                <div className="home-cards">
                {
                    shops.map(shop=>
                    {
                        return (
                            <div key={shop.id} className="home-card">
                        <div style={{width:"50px",height:"60px",backgroundColor:"red"}}>
                            
                        </div>
                        <div className="home-card--content">
                            <h2> {shop.shopName} </h2>
                            <h3> Rs.579.00 </h3>
                            <div className="buttons">
                                <button onClick={()=>navigate("/home/shop/"+shop.id)}>view </button>
                                <button>Call</button>
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

export default HomeLanding