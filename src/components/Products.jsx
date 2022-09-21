import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import Product from './Product';
import '../styles/components/Products.css';
const Products = () => {
  const { state, addToCart } = useContext(AppContext);
  const { products } = state;

  const handleAddtoCart = (product) => () => {
    addToCart(product);
  };

  return (
    <div className="Products">
      <div className="Products-items">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddtoCart={handleAddtoCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
