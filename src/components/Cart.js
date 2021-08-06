import React from 'react'
import {useCart} from "../contexts/cartContext"
const Cart = () => {
    const {itemsInCart,dispatch} = useCart();
    console.log(itemsInCart,"cart items")
    return (
        <div>
            <h2>Shopping Cart</h2>
            {
                itemsInCart.length===0 ?<h2>Cart is empty</h2> : (<div className="home-bottom">
               
               <div className="home-cards">
               {
                   itemsInCart.map(cartItem=>
                   {
                       return (
                           <div key={cartItem.id} className="home-card">
                       <div style={{width:"50px",height:"60px",backgroundColor:"red"}}>
                           
                       </div>
                       <div className="home-card--content">
                           <h2> {cartItem.name} </h2>
                           <h3> {cartItem.price} </h3>
                           <div className="product-detail-quantity" >
                   
                     <div>
                         <button onClick={()=>dispatch({type:"Decrease",payload:cartItem})}>-</button>
                         {cartItem.quantity}
                      <button onClick={()=>dispatch({type:"Increase",payload:cartItem})}>+</button>
                     </div>
                 </div>
                       </div>
                   </div>
                       )
                   })
               }
               </div>
           </div>)
            }
            
        </div>
    )
}

export default Cart
