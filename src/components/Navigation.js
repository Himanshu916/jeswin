import React,{useState} from 'react'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import {Link,useNavigate} from "react-router-dom"
import { SideBarData } from '../utils/SideBarData';
 const Navigation = () => {
     const navigate = useNavigate();
     const [sideBar,setSideBar] = useState(false);
     const showSideBar = ()=>setSideBar(!sideBar);

    return (
       <>
            <div className="header">
                <div>
                <Link to="#">
                    <MenuOutlinedIcon onClick={showSideBar} />
                </Link>
                   
                </div>
                <div style={{width:"30px",height:"30px",backgroundColor:"black",borderRadius:"500%"}} >
                    
                </div>
                <div>
                    <ShoppingCartOutlinedIcon onClick={()=>navigate("/home/cart")} />
                </div>
            </div>
            <nav className={sideBar ? "nav-menu active" : "nav-menu"}>
                <ul onClick={showSideBar} className="nav-menu-items">
                    <li className="navbar-toggle">
                        <Link className="menu-bars" to="#">
                            Close
                        </Link>
                    </li>
                    {
                        SideBarData.map((item,index)=>
                        {
                            return (
                                <li key={index} className={item.cName} >
                                    <Link to={item.path}>
                                        {item.title}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
       </>
    )
}

export default Navigation