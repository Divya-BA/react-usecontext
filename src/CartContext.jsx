import React, { createContext, useReducer, useContext } from 'react';


const CartContext = createContext();


const initialState = {
  cartItems: [],
};

function cartReducer(state, action) {
  switch (action.type) {
    
case 'ADD_TO_CART':
  const existingItem = state.cartItems.find(item => item.id === action.payload.id);
  if (!existingItem) {
    return {
      ...state,
      cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
    };
  }
  return state;

case 'INCREMENT_QUANTITY':
    return {
      ...state,
      cartItems: state.cartItems.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ),
    };
  case 'DECREMENT_QUANTITY':
    return {
      ...state,
      cartItems: state.cartItems.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ),
    };
    
case 'REMOVE_FROM_CART':
  return {
    ...state,
    cartItems: state.cartItems.filter(item => item.id !== action.payload.id),
  };

    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ cart: state, cartDispatch: dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
