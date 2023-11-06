import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { CartProvider, useCart } from './CartContext'; 
import Product from './Product';
import Cart from './Cart';
import data from './productdata';
import { BsCart4 } from 'react-icons/bs';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="app">
          <h1 className='a'>Shopping Cart</h1>
          <Navigation />
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

function Navigation() {
  const { cart } = useCart(); 
  const totalCartQuantity = cart.cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav>
      <ul>
        <li>
          <Link className='b' to="/">Home</Link>
        </li>
        <li>
          <Link className='b' to="/cart">
            <BsCart4 />
            Cart <button className='count'>({totalCartQuantity})</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

function ProductList() {
  return (
    <div className="products">
      {data.products.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

export default App;
