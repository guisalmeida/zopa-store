import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSelector } from 'react-redux';

import ProductCard from '../productCard';
import { TProduct } from '../../../types';
import { selectAllProducts } from '../../../store/selectors/productsSelectors';
import { FeatureWidgetContainer } from './styled';
import 'swiper/css';
import 'swiper/css/a11y';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

type TFeatureWidgetProps = {
  category: string;
  title: string;
  imageSrc: string;
};

const FeatureWidget = ({
  category,
  title,
  imageSrc,
}: TFeatureWidgetProps): React.JSX.Element => {
  const products: TProduct[] = useSelector(selectAllProducts);
  const categoryProducts = products.filter((product) =>
    product.categories.includes(category)
  );
  return (
    <FeatureWidgetContainer>
      <h2>{title}</h2>
      <picture>
        <img src={imageSrc} alt="Featured image" />
      </picture>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        loop={true}
        spaceBetween={40}
        slidesPerView={2}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
        pagination={{ clickable: true }}
        navigation={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 32,
          },
          450: {
            slidesPerView: 2,
            spaceBetween: 32,
          },
          1170: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
      >
        {categoryProducts.map((product, index) => (
          <SwiperSlide key={index}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </FeatureWidgetContainer>
  );
};

export default FeatureWidget;
