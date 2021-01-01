import React,{ useState } from 'react';
import { useStateValue } from "../../StateProvider";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import "./CheckoutProduct.css";

function CheckoutProduct({ id, image, name}) {
  
    const [count,setCount] = useState(1);
    const [state, dispatch] = useStateValue();
    const deleteItem = () => {
        dispatch({
          type: "REMOVE_FROM_BASKET",
          id: id,
        });
      };

     
    const itemDecremented = id => {
      if(count !== 1){
      setCount(count - 1);
      dispatch({
        type: "ITEM_DECREMENTED",
        id: id,
      });
    }
    };

    const itemIncremented = id => {
      if(count !== 5){ 
      dispatch({
        type: "ITEM_INCREMENTED",
        id: id,
      });
      setCount(count + 1);
    }
    };

   
 
    return (
      <>
    <div className="CheckoutProduct">
        <div className = "CheckoutProduct__left">
            <img className="CheckoutProduct__image" src={image} />
                <div className="CheckoutProduct__info">
                   <span className="Checkout__name"><b>{name}</b></span>
                </div>
        </div>
                <div className = "CheckoutProduct__right">
                  <button onClick = {() => itemDecremented(id)}>-</button>
                  <span>{count}</span>
                  <button onClick = {() => itemIncremented(id)}>+</button>
                  <DeleteForeverIcon style = {{alignItems:'center',marginTop:'auto'}} onClick = {deleteItem}/>
                </div>
        </div>
        
        </>
    
    )
}

export default CheckoutProduct;
