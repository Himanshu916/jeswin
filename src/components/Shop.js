import React from 'react'

 const Shop = () => {
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
                    <div className="home-card">
                        <div style={{width:"50px",height:"60px",backgroundColor:"red"}}>
                            
                        </div>
                        <div className="home-card--content">
                            <h2> Door Handle set 2</h2>
                            <h3> Rs.579.00 </h3>
                            <div className="buttons">
                                <button>view </button>
                                <button> Call</button>
                            </div>
                        </div>
                    </div>
                    <div className="home-card">
                        <div style={{width:"50px",height:"60px",backgroundColor:"red"}}>
                            
                        </div>
                        <div className="home-card--content">
                            <h2> Door Handle set 3</h2>
                            <h3> Rs.579.00 </h3>
                            <div className="buttons">
                                <button>view </button>
                                <button>Call</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </>
    )
}

export default Shop


