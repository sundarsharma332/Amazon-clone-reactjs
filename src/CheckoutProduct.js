import React from 'react';
import "./CheckoutProduct.css";
import { useStatevalue, useStateValue} from "./StateProvider";

function CheckoutProduct({ id , title , image , price , rating}) {
    const [{basket},dispatch] = useStateValue();
    // console.log(id , title , image , price , rating);

    const removeFromBasket = () => {
        // removing item from the basket 
        dispatch ({
            type: "REMOVE_FROM_BASKET",
            id :id,
        });
    };
    return (
        <div className = "checkoutProduct">
            <img className = "checoutProduct__image" src = {image} alt="item-1"/>
            <div className ="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                {
                    Array(rating)
                    .fill()
                    .map((_,i)=> (
                        <p>⭐</p>
                    ))
                }
                </div>
                <button onClick ={removeFromBasket}>Remove From Basket</button>
                
            </div>
            
        </div>
    );
}

export default CheckoutProduct;
