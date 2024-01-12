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

  const gorros = products.filter((product) =>
    product.categories.includes('gorros')
  );

  return (
    <>
      <Carousel />

      {isLoading ? <Spinner /> : <FeatureWidget products={gorros} />}
    </>
  );
};

export default Home;
