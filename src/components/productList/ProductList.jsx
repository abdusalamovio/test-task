import { useState, useEffect } from "react";
import { getProducts } from "@/services/api";
import { Link } from "react-router-dom";

import styles from "./productList.module.css";

export function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <section>
      <ul className={styles.productList}>
        {products.map((product) => (
          <li key={product.id} className={styles.productItem}>
            <Link to={`/product/${product.id}`} className={styles.productLink}>
              <img
                className={styles.productImage}
                src={product.colors[0].images[0]}
                alt={product.name}
              />
              <h3 className={styles.productName}>{product.name}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
