import { useSelector } from 'react-redux'
import {
  selectAllProducts,
  selectIsLoading,
} from '../../store/selectors/productsSelectors'
import Carousel from '../../components/carousel/carousel'
import ProductsList from '../../components/productsList'
import Spinner from '../../components/spinner/spinner'
import { TProduct } from '../../types'

const Home = (): React.JSX.Element => {
  const products: TProduct[] = useSelector(selectAllProducts)
  const isLoading: boolean = useSelector(selectIsLoading)

  return (
    <>
      <Carousel />

      {isLoading ? (
        <Spinner />
      ) : (
        <ProductsList products={products} category={''} />
      )}
    </>
  )
}

export default Home