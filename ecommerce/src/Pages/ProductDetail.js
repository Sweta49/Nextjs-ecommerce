import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ProductService } from '../services/ProductService';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    ProductService.getProductById(parseInt(id))
      .then((data) => setProduct(data))
      .catch((error) => console.error('Error fetching product', error));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Price: {product.price}</p>
    </div>
  );
}

export default ProductDetail;
