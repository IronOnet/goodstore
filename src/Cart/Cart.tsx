import React from "react"; 
import { Link } from "react-router-dom"; 
import { useCartContext } from "../CartContext/CartContext";
import { CartItem } from "./CartItem"; 

export const Cart = () =>{
    const { products, removeFromCart, totalPrice } = useCartContext() 
    if(!products.length){
        return <>Your Cart is Empty. <Link to="/">Back to main Page</Link></>
    }

    return (
        <section className="nes-container with-title is-centered">
            <h3 className="title">Cart Summary</h3> 
            <div className="cart-items">
                {products.map((datum) =>(
                    <CartItem key={datum.name} product={datum} removeFromCart={removeFromCart}/>
                ))}
                <p>Total: {totalPrice()} Zm</p>
            </div>
            <div>
                <Link to="/checkout">
                    <button className="nes-btn is-primary">Go to checkout</button>
                </Link>
            </div>
        </section>
    )
}