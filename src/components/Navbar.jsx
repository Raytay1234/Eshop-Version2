import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/useCart';
import '../styles/Navbar.css';


export default function Navbar() {
  const { cartItems } = useCart();

  return (
    <nav className="navbar">
      <div className="logo"><Link to="/">ElectroStore</Link></div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/cart">Cart ({cartItems.length})</Link></li>
      </ul>
    </nav>
  );
}
