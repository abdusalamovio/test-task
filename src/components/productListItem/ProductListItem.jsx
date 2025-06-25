import { useState, useEffect } from "react";
import { getProduct, getSizes } from "@/services/api";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import { useDispatch } from "react-redux";
import { addItem } from "@/store/cartSlice";

import { nanoid } from "nanoid";

import styles from "./productListItem.module.css";

export function ProductListItem() {
  const [product, setProduct] = useState(null);
  const [sizes, setSizes] = useState([]);
  const [activeColorIndex, setActiveColorIndex] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);

  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    getProduct(id).then((data) => {
      setProduct(data);
    });
  }, [id]);

  useEffect(() => {
    getSizes().then((data) => {
      setSizes(data);
    });
  }, []);

  if (!product) return null;

  const { name, colors } = product;
  const { images, description, price } = colors[activeColorIndex];
  const availableSizes = colors[activeColorIndex].sizes;

  const handleColorChange = (index) => {
    setActiveColorIndex(index);
    setActiveImageIndex(0);
    setSelectedSize(null);
  };

  const handleAddToCart = () => {
    const color = colors[activeColorIndex];
    const size = sizes.find((s) => s.id === selectedSize);

    dispatch(
      addItem({
        id: nanoid(),
        image: color.images[activeImageIndex],
        name: product.name,
        colorId: color.id,
        colorName: color.name,
        sizeId: size.id,
        sizeLabel: size.label,
        sizeNumber: size.number,
        price: color.price,
      })
    );
  };

  return (
    <article>
      <Link to={"/"} className={styles.backLink}>
        <ArrowLeft style={{ height: "19px", width: "19px" }} />
        Вернуться назад
      </Link>

      <section className={styles.imageSection}>
        <ul className={styles.thumbnailsList}>
          {images.map((image, index) => (
            <li key={index} className={styles.thumbnailItem}>
              <img
                className={`${styles.thumbnailImage} ${
                  index === activeImageIndex && styles.selectedThumbnail
                }`}
                onClick={() => setActiveImageIndex(index)}
                src={image}
                alt={name}
              />
            </li>
          ))}
        </ul>

        <img
          className={styles.mainImage}
          src={images[activeImageIndex]}
          alt={name}
        />
      </section>

      <h1 className={styles.name}>{name}</h1>

      <p className={styles.description}>{description}</p>

      <section className={styles.colorsSection}>
        <h3>Доступные цвета:</h3>
        <ul className={styles.colorsList}>
          {colors.map((color, index) => (
            <li key={color.id} className={styles.colorItem}>
              <button
                className={`${styles.colorButton} ${
                  index === activeColorIndex && styles.selectedColor
                }`}
                onClick={() => handleColorChange(index)}
              >
                {color.name}
              </button>
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.sizesSection}>
        <h3>Доступные размеры:</h3>
        <ul className={styles.sizesList}>
          {sizes.map((size) => {
            const isAvailable = availableSizes.includes(size.id);
            return (
              <li key={size.id} className={styles.sizeItem}>
                <button
                  className={`${styles.sizeButton} ${
                    size.id === selectedSize && styles.selectedSize
                  }`}
                  onClick={() => setSelectedSize(size.id)}
                  disabled={!isAvailable}
                >
                  {`${size.label} (${size.number})`}
                </button>
              </li>
            );
          })}
        </ul>
      </section>

      <h3 className={styles.price}>Цена: {price} р.</h3>

      <button
        className={styles.addToCartBtn}
        onClick={handleAddToCart}
        disabled={!availableSizes.length}
      >
        В корзину
      </button>
    </article>
  );
}
