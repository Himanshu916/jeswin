
import React,{useEffect,useState} from 'react'
import AddStock from './AddStock';
import { Routes,Route,useNavigate} from "react-router-dom"
import axios from "axios"
import { useAuth } from '../contexts/authContext'
import Staff from './Staff';
import StaffRegister from './StaffRegister';

const SellerHome = ()=>
{
    const [shops,setShops] = useState([])
    const {token} = useAuth()
    const navigate = useNavigate()

    useEffect(()=>
    {
        // console.log(token,"in shop")
        (async ()=>
        {
            try
            {
                const response =await axios.get("https://tranquil-escarpment-64779.herokuapp.com/products",{headers:{"x-access-token":token}})
                console.log(response)
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
                    Hi R.N Enterprises
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
                    <button>Orders</button>
                    <button>Stocks</button>
                </div>
                <div>

                
                <div className="home-cards">
                {
                    shops.map(shop=>
                    {
                        return (
                            <div key={shop.id} className="home-card">
                        <div style={{width:"50px",height:"60px",backgroundColor:"red"}}>
                            
                        </div>
                        <div className="home-card--content">
                            <h2> {shop.name} </h2>
                            <h3> {shop.price} </h3>
                            <div className="buttons">
                                <button >Remove </button>
                                <button>Update</button>
                            </div>
                        </div>
                    </div>
                        )
                    })
                }
                </div>
                
                  
              
                </div>
            </div>
            <button onClick={()=>navigate("/home/addstock")} className="add-product-button">
                        +
                    </button>
        </>
    )
}
const SellerDashBoard = () => {
   
    return (
       <>
       <Routes>
            <Route path="/" element={<SellerHome/>} />
           <Route path="/addstock" element={<AddStock/>} />
           <Route path="staff" element={<Staff/>} />
           <Route path="addstaff" element={<StaffRegister/>} />
       </Routes>
       
       </>
    )
}

export default SellerDashBoard
