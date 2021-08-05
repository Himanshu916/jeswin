import React from 'react'
import Button from '@material-ui/core/Button';
import {Link,useNavigate} from "react-router-dom"
 const UserCategory = () => {
     const navigate=useNavigate()
    return (
        <div style={{height:"90vh"}} className="onboarding">
        <div style={{width:"100px",height:"100px",backgroundColor:"black",marginBottom:"1rem",alignSelf:"center",borderRadius:"50%"}}>

        </div>
        <div className="onboarding-bottom category-bottom">
            <div className="onboarding-bottom-first" >
            <div style={{backgroundColor:"var(--primary-color)",padding:".5rem",borderRadius:"50%",marginRight:".8rem"}}>
            <img  src={require("../images/welcome.svg").default} alt="" />
            </div>
                
                <h1>Welcome</h1>
            </div>
            <div className="onboarding-bottom-second">
                <p className="para-bold">
                    Please select an option
                </p>
                
            </div>
            
          
            <Button onClick={()=>navigate("/signup/buyer")} className="big" style={{padding:"10px",backgroundColor:"var(--primary-color)"}} variant="contained" color="primary">
                I am a Buyer
            </Button>
            <Button onClick={()=>navigate("/signup/seller")} className="big" style={{padding:"10px",backgroundColor:"var(--primary-color)"}} variant="contained" color="primary">
                I am a Seller
            </Button>
            <Button disabled onClick={()=>navigate("/signup/seller")} className="big" style={{padding:"10px",backgroundColor:"var(--primary-color)"}} variant="contained" color="primary">
                I am a Delivery agent
            </Button>
         
            <div className="onboarding-bottom-third">
                <p className="para-semiBold">
                    Already have an account?
                </p>
                <p className="linkText">
                <Link className="linkStyle" to="/login">
                Login Here
                </Link>
                    
                </p>
            </div>
        </div>
    </div>
    )
}

export default UserCategory