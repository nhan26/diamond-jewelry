import React, { useState, useEffect } from 'react'
import Product from "./Product"
import styles from "./JewelryPageProducts.module.css"
import axios from 'axios';

const JewelryPageProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(process.env.REACT_APP_API_URL + "/products", { params: { group: "Trang sức" } });
      setProducts(response.data);
    }
    fetchData();
  }, []);
  return (
    <>
      <div className={styles.Title}>CÁC SẢN PHẨM TRANG SỨC</div>
      <div className={styles.Container}>
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </>
  )
}

export default JewelryPageProducts
