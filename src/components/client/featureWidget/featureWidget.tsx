import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/a11y';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { FeatureWidgetContainer } from './styled';
import { TProduct } from '../../../types';
import ProductCard from '../productCard';

type TFeatureWidgetProps = {
  products: TProduct[];
};

const FeatureWidget = ({
  products,
}: TFeatureWidgetProps): React.JSX.Element => {
  return (
    <FeatureWidgetContainer>
      <h2>Produtos em destaque</h2>
      <picture>
        <img src="images/feature_image.jpg" alt="" />
      </picture>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        loop={true}
        spaceBetween={40}
        slidesPerView={2}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
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
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </FeatureWidgetContainer>
  );
};

export default FeatureWidget;
