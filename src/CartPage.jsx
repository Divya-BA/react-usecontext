import React from 'react';
import { useCart } from './CartContext';

function CartPage() {
  const { cartItems, dispatch } = useCart();

  

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      <div>
        {cartItems.map(item => (
          <div key={item.id}>
            
          </div>
        ))}
      </div>
     
    </div>
  );
}

export default CartPage;
