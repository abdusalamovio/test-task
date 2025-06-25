import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

import { useSelector } from "react-redux";

import styles from "./header.module.css";

export function Header() {
  const count = useSelector((state) => state.cartSlice.items.length);

  return (
    <Link to={"/cart"} className={styles.header}>
      <ShoppingCart style={{ height: "19px", width: "19px" }} />
      <h3>{count}</h3>
    </Link>
  );
}
