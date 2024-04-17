import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard'; // Update this import

function HomePage() {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        //  first 4 products as featured
        setFeaturedProducts(data.slice(0, 4));
      })
      .catch(error => console.error('Error fetching featured products', error));
  }, []);

  return (
    <div className="home-page">
      <h2>Featured Products</h2>
      <div className="product-list">
        {featuredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
