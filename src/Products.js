import React from 'react';
import "./Products.css"
import { useStateValue } from './StateProvider';

function Products({ id, title, image, price, rating }) {
    const [{basket}, dispatch] = useStateValue();
    const addToBasket = () => {
        // add item to the basket
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id:id,
                title: title,
                image:image,
                price:price,
                rating: rating
            },
        });


    };


    return (
        <div className="product">
            <div className="product__info">
            <p>{title}</p>
            
            <p className="product__price">
            <small>INR</small>
                <strong>{price}</strong>
            </p>
            
            </div>
            <img src={image} alt = ""/>
            <button onClick = {addToBasket}>Add to Basket</button>
            <div className="product__rating">
                {
                    Array(rating)
                    .fill()
                    .map((_)=> (
                        <p>⭐</p>
                    ))
                }
            </div>
            <div className="check__prime"><p>✔Prime</p></div>

        </div>
    );
}

export default Products
