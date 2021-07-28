import React from 'react'

export const HomeLanding = () => {
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
                    <div className="home-card">
                        <div style={{width:"50px",height:"60px",backgroundColor:"red"}}>
                            
                        </div>
                        <div className="home-card--content">
                            <h2> R.N Enterprises Ltd </h2>
                            <h3> Rs.579.00 </h3>
                            <div className="buttons">
                                <button>view </button>
                                <button>Call</button>
                            </div>
                        </div>
                    </div>
                    <div className="home-card">
                        <div style={{width:"50px",height:"60px",backgroundColor:"red"}}>
                            
                        </div>
                        <div className="home-card--content">
                            <h2> R.N Enterprises Ltd </h2>
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

export default HomeLanding