import React from 'react'

const StaffRegister = () => {
    return (
        <div>
        <h2 style={{textAlign:"center",fontWeight:"500",color:"black",padding:"0 0 1rem 0",fontSize:"1rem"}}>My Staff</h2>
        <form style={{height:"35vh"}} className="signup-form" action="">
        <h2 style={{fontWeight:"500",color:"black",padding:"0 0 1rem 0",fontSize:"1.2rem"}}>Staff Register</h2>
        <input  className="signup-form--input" placeholder="Enter Staff Name" type="text" />
        <input  className="signup-form--input" placeholder="Enter Staff Register" type="text" />
        
    
        
        <div style={{margin:".5rem 0"}} className="buttons">
                    <button style={{fontSize:"1.2rem",fontWeight:"600",letterSpacing:"1px",borderRadius:"5px",padding:"1.2rem"}}  >Staff Register</button>
        </div>

        </form>
         
        </div>
    )
}

export default StaffRegister