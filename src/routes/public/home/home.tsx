import { useSelector } from 'react-redux';
import { selectIsLoading } from '../../../store/selectors/productsSelectors';
import Carousel from '../../../components/client/carousel/carousel';
import Spinner from '../../../components/client/spinner/spinner';
import FeatureWidget from '../../../components/client/featureWidget';

const Home = (): React.JSX.Element => {
  const isLoading: boolean = useSelector(selectIsLoading);

  return (
    <>
      <Carousel />

      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <FeatureWidget
            category="camisetas"
            title="Camisetas Zopa"
            imageSrc="images/peita-worldwide.jpg"
          />
          <FeatureWidget
            category="gorros"
            title="Coleção Gorros"
            imageSrc="images/feature_image2.jpg"
          />
        </>
      )}
    </>
  );
};

export default Home;
