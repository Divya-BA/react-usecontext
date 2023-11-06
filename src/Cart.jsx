import React from 'react';

import { useCart } from './CartContext';

function Cart() {
  const { cart, cartDispatch } = useCart();

  const getTotalQuantity = () => {
    return cart.cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalAmount = () => {
    return cart.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const incrementQuantity = (itemId) => {
    cartDispatch({ type: 'INCREMENT_QUANTITY', payload: { id: itemId } });
  };

  const decrementQuantity = (itemId) => {
    const currentItem = cart.cartItems.find(item => item.id === itemId);
    if (currentItem && currentItem.quantity > 1) {
      cartDispatch({ type: 'DECREMENT_QUANTITY', payload: { id: itemId } });
    }
  };

  const removeFromCart = (itemId) => {
    cartDispatch({ type: 'REMOVE_FROM_CART', payload: { id: itemId } });
  };

  return (
    <div className="cart">
      <ul>
        {cart.cartItems.map((item) => (
          <li key={item.id}>
            <div className="cart-item">
              <div className="item-image">
                <img src={item.thumbnail} alt={item.title} />
              </div>
              {/* <div className="item-details">
                <p>{item.title}</p>
                <p>{item.description}</p>
                <p>Price: ${item.price}</p>
                <div className="quantity-controls">
                <span>Quantity: </span>
                  <button className='but' onClick={() => decrementQuantity(item.id)}>-</button>
                  {item.quantity}
                  <button className='but' onClick={() => incrementQuantity(item.id)}>+</button>
                </div>
                <button className='remove' onClick={() => removeFromCart(item.id)}>Remove</button>
              </div> */}
              <div className="item-details">
              <p><h3 className='title'>{item.title}</h3></p>
                <p>{item.description}</p>
              </div>
              <div className="item-details">
              <p>Price: ${item.price}</p>
              </div>
              <div className="item-details">
              <div className="quantity-controls">
                <span>Quantity: </span>
                  <button className='but' onClick={() => decrementQuantity(item.id)}>-</button>
                  {item.quantity}
                  <button className='but' onClick={() => incrementQuantity(item.id)}>+</button>
                </div>
              </div>
              
                <div className="item-details" >
                <button className='remove' onClick={() => removeFromCart(item.id)}>Remove</button>

                </div>
            </div>
          </li>
        ))}
      </ul>
      <div className='summary'>
      <p>Total Quantity: {getTotalQuantity()}</p>
      <p>Total Amount: ${getTotalAmount()}</p>
      
      </div>
    </div>
  );
}

export default Cart;
