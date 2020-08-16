import React from 'react'
import "./Subtotal.css"
import CurrencyFromat from "react-currency-format";
import { Checkbox } from '@material-ui/core';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';

function Subtotal() {
    const [{basket},dispatch] = useStateValue();
    return (
        <div className="subtotal">
            <CurrencyFromat
            renderText = {(value) => (
                <>
                <p>
            Subtotal ({basket.length} items):<strong>{value}</strong>
                </p>
                <small className ="subtotal__gift">
                    <input type = "Checkbox"/>This order contains a Gift
                </small>
                </>
            )} 
            decimalScale = {2}
            value= {getBasketTotal(basket)}
            displayType = {"text"}
            thousandSeparater = {true}
            prefix = {"INR"}
            />
            <button>Proceed to checkout</button>
            
        </div>
    )
}

export default Subtotal
