import clsx from 'clsx';
import { useRef, Fragment } from 'react';
import SwiperCore, { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import ProductItem from '../ProductItem';
import styles from './styles.module.css';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const BREAKPOINTS = {
  '@0.00': {
    slidesPerView: 1,
    slidesPerGroup: 1,
  },
  '@0.75': {
    slidesPerView: 2,
    slidesPerGroup: 2,
  },
  '@1.00': {
    slidesPerView: 3,
    slidesPerGroup: 3,
  },
  '@1.50': {
    slidesPerView: 5,
    slidesPerGroup: 5,
  },
};

const ProductsGridSlider = ({
  breakpoints = BREAKPOINTS,
  products = [],
  className,
  onPrev,
  onNext,
  onProductClick,
}) => {
  const prevButton = useRef(null);
  const nextButton = useRef(null);
  const swiperRef = useRef(null);

  return (
    <div className={clsx(styles.products_grid_slider, className)}>
      <div className={styles.products_grid_slider_wrapper}>
        {products.length > 0 && (
          <Fragment>
            <Swiper
              loop
              ref={swiperRef}
              scrollbar={false}
              breakpoints={breakpoints}
              spaceBetween={5}
              slidesPerView="auto"
              centeredSlides={false}
              onSlideNextTransitionStart={onNext}
              onSlidePrevTransitionStart={onPrev}
            >
              {products.map((product) => (
                <SwiperSlide key={product.sku}>
                  <ProductItem {...product} onClick={onProductClick} />
                </SwiperSlide>
              ))}
            </Swiper>
            <div ref={prevButton} onClick={() => swiperRef.current.swiper.slidePrev()} className={styles.products_grid_slider__prev} />
            <div ref={nextButton} onClick={() => swiperRef.current.swiper.slideNext()} className={styles.products_grid_slider__next} />
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default ProductsGridSlider;
