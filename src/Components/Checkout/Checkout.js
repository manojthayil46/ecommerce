import React from 'react';
import "./Checkout.css";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import { useStateValue } from "../../StateProvider";
import { useHistory } from 'react-router';

function Checkout() {
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();
  const confirmOrder = () => { 
    history.push({
      pathname:  "/orders"
    })
  };
    
    return (
        <div className="checkout__title">
           <div className="Header">
              <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
                 <div className="header__optionsBasket">
                     <ShoppingCartIcon />
                     <span className="header__optionLineTwo header__basketCount"> {basket.length}</span>
                 </div>      
            </div> 
          <h2>Your Shopping Basket</h2>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              name={item.name}
              image={item.image}
              title={item.title}
            />
          ))}
          <button onClick = {confirmOrder}>Confirm Order</button>
    </div>
    )
}

export default Checkout
