import { getProductUrl, getProductImage } from '../../helpers';
import clsx from 'clsx';

import styles from './styles.module.css';
import Price from '../Price';

const ProductItem = ({ includeSku, className, onClick, ...product }) => {
  const { name, sku, final_price_min_formatted, final_price_max_formatted, final_price, price } = product;
  const url = getProductUrl(product);
  const image = getProductImage(product);
  return (
    <div className={clsx(styles.product, className)}>
      <div className={styles.product__wrapper}>
        <a href={url} onClick={() => onClick(sku)}>
          <img className={styles.product__image} src={image} alt={name} />
        </a>
      </div>
      <div className={styles.product__info}>
        <a href={url}>
          {includeSku && <div className={styles.product__sku}>{sku}</div>}
          <div className={styles.product__name}>{name}</div>
        </a>
        <Price
          className={styles.product__price}
          price={price}
          finalPrice={final_price}
          min={final_price_min_formatted}
          max={final_price_max_formatted}
        />
        <a href={url} onClick={() => onClick(sku)} className={styles['product__view-details']}>
          View
        </a>
      </div>
    </div>
  );
};

export default ProductItem;
