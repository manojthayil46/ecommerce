import React from 'react';
import "./Product.css";
import { useStateValue } from '../../StateProvider';

function Product({ id,name, title, image,quantity }) {
  const [state, dispatch] = useStateValue();
  const addToBaskett = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        name : name,
        title: title,
        image: image,  
        quantity : parseInt(quantity)
      },
    });
  };
    return (
        <div className="product">
        <img src={image} />
        <div className="product__info">
          <p><b>{name}</b></p>
          <p>{title}</p>
        </div>
        <button onClick={addToBaskett}>Add</button>
      </div>
    )
}

export default Product;
