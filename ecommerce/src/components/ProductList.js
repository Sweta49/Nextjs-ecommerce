import React, { useState, useEffect } from 'react';
import { ProductService } from '../services/ProductService';
import ProductCard from './ProductCard';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    ProductService.getAllProducts()
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products', error));
  }, []);

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
