import { useSelector } from 'react-redux'
import { selectAllProducts } from '../../store/selectors/productsSelectors'
import { Carousel } from '../../components/carousel/carousel'
import ProductsList from '../../components/productsList'
import Spinner from '../../components/spinner/spinner'

const Home = () => {
  const products = useSelector(selectAllProducts)
  const isLoading = false

  return (
    <>
      <Carousel />

      {isLoading ? (
        <Spinner />
      ) : (
        <ProductsList products={products} category={undefined} />
      )}
    </>
  )
}

export default Home
