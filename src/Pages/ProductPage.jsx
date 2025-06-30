// src/pages/ProductsPage.jsx
import React from 'react';
import ProductList from '../components/ProductList';

export default function ProductsPage() {
  return (
    <div className="products-page">
      <h2>Our Products</h2>
      <ProductList />
    </div>
  );
}
