import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "@/store/cartSlice";

import styles from "./cart.module.css";

export function Cart() {
  const { items } = useSelector((state) => state.cartSlice);
  const dispatch = useDispatch();

  return (
    <section>
      <Link to={"/"} className={styles.backLink}>
        <ArrowLeft style={{ height: "19px", width: "19px" }} />
        Вернуться на главную
      </Link>

      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item.id} className={styles.item}>
            <img className={styles.image} src={item.image} alt={item.name} />
            <h3 className={styles.name}>{item.name}</h3>
            <p className={styles.color}>Цвет: {item.colorName}</p>
            <p className={styles.size}>
              Размер: {item.sizeLabel} ({item.sizeNumber})
            </p>
            <p className={styles.price}>Цена: {item.price} р.</p>
            <button
              className={styles.removeButton}
              onClick={() => dispatch(removeItem(item))}
            >
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
