import React from 'react';
import { useCart } from './CartContext';
import { AiOutlineStar } from "react-icons/ai";


function Product({ product }) {
  const { cartDispatch } = useCart();

  const addToCart = () => {
    cartDispatch({ type: 'ADD_TO_CART', payload: product });
    alert("Product added to cart successfully")
  };

  return (
    <div className="product">
        <div className='image'>
      <img  src={product.thumbnail} alt={product.title} />
      </div>
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <span className="badge badge-pill badge-warning"><AiOutlineStar/>{product.rating}</span>

      <p>Price: ${product.price}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default Product;
