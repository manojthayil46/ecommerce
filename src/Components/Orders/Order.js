import React from 'react';
import { useStateValue } from "../../StateProvider";
import './Order.css';

function Order() {
    const [state, dispatch] = useStateValue();
    console.log(state.basket);
    const data = state.basket.map(item => 
        <>
        <div className="CheckoutProduct">
        <div className = "CheckoutProduct__left">
            <img className="CheckoutProduct__image" src={item.image} />
                <div className="CheckoutProduct__info">
                   <span className="Checkout__name"><b>{item.name}</b></span>
                   <span className = "Checkout__quantity"><b>{item.quantity}X</b></span>
                </div>
        </div>
        </div>
        <hr />
        </>
 )
    return (
        <>
        <h2>Your Orders</h2>
        {data}
        </>
    )
}

export default Order
