import React from 'react';
import styles from "../styles/ProductList.module.css";
import ProductCards from './ProductCards';

const Products = ({productList}) => {
  return <div className={styles.Container}>
      <h1 className={styles.title}>
          The Best Plastic Products
      </h1>
      <p className={styles.desc}>
          The quick brown fox jumps over the lazy dogs
          the quick brown fox jumps over the lazy dogs
          the quick brown fox jumps over the lazy dogs
          the quick brown fox jumps over the lazy dogs
          the quick brown fox jumps over the lazy dogs
          the quick brown fox jumps over the lazy dogs
      </p>
      <div className={styles.wrapper}>
          {productList.map((product) => (
              <ProductCards key={product._id} product={product}/>

          )
          )}
      </div>
  </div>;
};

export default Products;
