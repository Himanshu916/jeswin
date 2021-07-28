import React from 'react'
import Button from '@material-ui/core/Button';
import {Link,useNavigate} from "react-router-dom"
const Onboarding = () => {
    const navigate = useNavigate();
    return (
        <div className="onboarding">
            <div style={{width:"100px",height:"100px",backgroundColor:"black",marginBottom:"1rem",alignSelf:"center",borderRadius:"50%"}}>

            </div>
            <div className="onboarding-middle big-center">
                <img className="banner-image" src={require("../images/amico.svg").default} alt="" />
            </div>
            <div className="onboarding-bottom">
                <div className="onboarding-bottom-first" >
                <div style={{backgroundColor:"var(--primary-color)",padding:".5rem",borderRadius:"50%",marginRight:".8rem"}}>
                <img  src={require("../images/welcome.svg").default} alt="" />
                </div>
                    
                    <h1>Welcome</h1>
                </div>
                <div className="onboarding-bottom-second">
                    <p className="para-bold">
                        Welcome to Jeswin Cyriac
                    </p>
                    <p className="para-bold">
                        shopping platform
                    </p>
                </div>
                <p className="para-light">
                    Leading B2B E-commerce platform
                </p>
                <Button onClick={()=>navigate("/signup")} className="big" style={{padding:"10px",backgroundColor:"var(--primary-color)"}} variant="contained" color="primary">
                    Sign Up
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

export default Onboarding
