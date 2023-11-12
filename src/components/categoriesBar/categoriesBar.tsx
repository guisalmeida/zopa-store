import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { selectAllProducts } from '../../store/selectors/productsSelectors'

import { ProductsCategories } from './styled'
import { TProduct } from '../../types'

const CategoriesBar = (): React.JSX.Element => {
  const { category } = useParams()
  const allProducts: TProduct[] = useSelector(selectAllProducts)
  const categoriesSet = new Set()

  allProducts.forEach(product => {
    product.categories.forEach(cat => categoriesSet.add(cat))
  })

  return (
    <ProductsCategories>
      <ul>
        {Array.from(categoriesSet)
          .sort()
          .map((cat, index) => {
            return (
              <li key={index}>
                <Link
                  to={`${cat}`}
                  className={category === cat ? 'selected' : ''}
                  style={cat === 'sale' ? { color: '#cf3838' } : null}
                >
                  {cat}
                </Link>
              </li>
            )
          })}
      </ul>
    </ProductsCategories>
  )
}

export default CategoriesBar
