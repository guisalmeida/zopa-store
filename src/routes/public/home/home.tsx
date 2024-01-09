import { useSelector } from 'react-redux';
import {
  selectAllProducts,
  selectIsLoading,
} from '../../../store/selectors/productsSelectors';
import Carousel from '../../../components/client/carousel/carousel';
import ProductsList from '../../../components/client/productsList';
import Spinner from '../../../components/client/spinner/spinner';
import { TProduct } from '../../../types';
import FeatureWidget from '../../../components/client/featureWidget';

const Home = (): React.JSX.Element => {
  const products: TProduct[] = useSelector(selectAllProducts);
  const isLoading: boolean = useSelector(selectIsLoading);

  return (
    <>
      <Carousel />

      {isLoading ? (
        <Spinner />
      ) : (
        <FeatureWidget products={products} />
        // <ProductsList products={products} category={''} />
      )}
    </>
  );
};

export default Home;
