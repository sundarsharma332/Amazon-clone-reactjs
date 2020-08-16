import React from 'react'
import { useStateValue } from './StateProvider'
import "./Checkout.css"
import CheckoutProduct from "./CheckoutProduct"
import Subtotal from "./Subtotal"
import CurrencyFromat from "react-currency-format";
import { Link } from 'react-router-dom';


function Checkout() {
    const [{ basket }] = useStateValue();
    return (
        <div className="checkout">
            <img className="checkout__ad" src="https://rukminim1.flixcart.com/flap/844/140/image/d4a6e6051ed14150.jpg?q=50" alt="checkout_ads"
            />

            {basket?.length === 0 ? (
                <div>
                    <h2>Your shoping basket is Empty</h2>
                    <p>You have no item in your basket .To buy one or more products "add to basket" next to the item</p>
                    <Link to="/"><button className="link__home">Back to Home page</button></Link>
                </div>
            ) : (
                <div>
                    <h2 className="checkout__title">your shoping Basket</h2>
                    {/* list out the bunch of the products */}
                    {basket?.map((item) => (

                        <CheckoutProduct
                        id = {item.id}
                        title = {item.title}
                        image = {item.image}
                        price = {item.price}
                        rating = {item.rating}
                        />


                    ))}
                    
                </div>
            )}
            {basket.length > 0 && (
            <div className = "checkout__right">
            <h1>Subtotal</h1>
            <Subtotal/>
            </div>
        )}
        </div>
    );
}

export default Checkout;
