import React from 'react'

const Product = () => {
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
          <div className="product">
              <img src="" alt="" />
              <div className="product-detail">
                  <h3>Door handle set</h3>
                  <h3 className="product-price">Rs 579</h3>
                  <div className="product-detail-quantity" >
                      <h3>Quantity</h3>
                      <div>
                          <button>-</button>
                          1
                       <button>+</button>
                      </div>
                  </div>
              </div>
          </div>
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
                 <button>Add Cart</button>
             </div>
          </div>
          <h4 style={{textAlign:"center",margin:"1rem 0",fontWeight:"400",fontSize:".9rem"}}>See All Reviews</h4>
      </div>
        </>
        
    )
}

export default Product
