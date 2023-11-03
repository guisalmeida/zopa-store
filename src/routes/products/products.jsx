import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import {
  selectAllProducts,
  selectIsLoading,
} from '../../store/selectors/productsSelectors'
import ProductsList from '../../components/productsList'
import Spinner from '../../components/spinner/spinner'

const Products = () => {
  const { category } = useParams()

  const allProducts = useSelector(selectAllProducts)
  const isLoading = useSelector(selectIsLoading)

  return isLoading ? (
    <Spinner />
  ) : (
    <ProductsList products={allProducts} category={category} />
  )
}

export default Products
