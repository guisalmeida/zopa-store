import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectAllProducts } from '../../store/selectors/productsSelectors'
import { Carousel } from '../../components/carousel/carousel'
import ProductsList from '../../components/productsList'
import Spinner from '../../components/spinner/spinner'
import { setProducts } from '../../store/actions/productsActions'

import { getProductsCollection } from '../../utils/firebase'

const Home = () => {
  const dispatch = useDispatch()
  const products = useSelector(selectAllProducts)
  const isLoading = false

  useEffect(() => {
    const getProductsMap = async () => {
      const productsMap = await getProductsCollection()
      dispatch(setProducts(productsMap))
    }

    getProductsMap()
  }, [])

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
