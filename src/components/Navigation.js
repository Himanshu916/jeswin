import React from 'react'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import {useNavigate} from "react-router-dom"
 const Navigation = () => {
     const navigate = useNavigate();

    return (
       <>
        <div className="header">
                <div>
                   <MenuOutlinedIcon/>
                </div>
                <div style={{width:"30px",height:"30px",backgroundColor:"black",borderRadius:"500%"}} >
                    
                </div>
                <div>
                    <ShoppingCartOutlinedIcon onClick={()=>navigate("/home/cart")} />
                </div>
            </div>
       </>
    )
}

export default Navigation