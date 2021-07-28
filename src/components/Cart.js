import React from 'react'

const Cart = () => {
    return (
        <div>
            <h2>Shopping Cart</h2>
            <div className="home-bottom">
               
                <div className="home-cards">
                    <div className="home-card">
                        <div style={{width:"50px",height:"60px",backgroundColor:"red"}}>
                            
                        </div>
                        <div className="home-card--content">
                            <h2> Door Handle set 2</h2>
                            <h3> Rs.579.00 </h3>
                            <div className="product-detail-quantity" >
                    
                      <div>
                          <button>-</button>
                          1
                       <button>+</button>
                      </div>
                  </div>
                        </div>
                    </div>
                    <div className="home-card">
                        <div style={{width:"50px",height:"60px",backgroundColor:"red"}}>
                            
                        </div>
                        <div className="home-card--content">
                            <h2> Door Handle set 3</h2>
                            <h3> Rs.579.00 </h3>
                            <div className="product-detail-quantity" >

                                <div>
                                    <button>-</button>
                                    1
                                <button>+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
