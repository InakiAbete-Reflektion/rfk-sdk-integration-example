import clsx from 'clsx';

import styles from './styles.module.css';

const Price = ({ className, max, min, price, finalPrice }) => {
  if (max) {
    return (
      <div className={clsx(styles.price, className)}>
        <span className={styles.price__range}>
          ${min} - ${max}
        </span>
      </div>
    );
  }
  const discounted = finalPrice !== price;
  return (
    <div className={clsx(styles.price, { [styles['price--discounted']]: discounted }, className)}>
      <span className={styles.price__original}>${price}</span>
      {discounted && finalPrice && <span className={styles.price__final}>${finalPrice}</span>}
    </div>
  );
};

export default Price;
