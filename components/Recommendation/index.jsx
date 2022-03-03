import { Actions } from '@rfk-sdk/core';
import { RecommendationActions } from '@rfk-sdk/widgets';
import ProductsGridSlider from '../ProductsGridSlider';
import styles from './styles.module.css';

const Recommendation = ({ dispatch, loading, loaded, title, error, products = [] }) => {
  const ready = (loaded && !loading) || products.length > 0;
  return (
    <div className={styles.recommendation}>
      {ready && title && <div className={styles.recommendation_title}>{title}</div>}
      {ready && (
        <ProductsGridSlider
          onNext={() => {
            dispatch(RecommendationActions.NAVIGATION_NEXT);
          }}
          onPrev={() => {
            dispatch(RecommendationActions.NAVIGATION_PREV);
          }}
          onProductClick={(sku) => {
            dispatch(Actions.PRODUCT_CLICK, { sku });
          }}
          products={products}
        />
      )}
    </div>
  );
};

export default Recommendation;
