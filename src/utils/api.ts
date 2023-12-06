import { TProduct } from '../types'
import axios from 'axios'

export const getProductsCollection = async (
  category = '',
  limit = 0,
): Promise<TProduct[] | void> => {
  const productsUrl = 'http://localhost:5000/api/products'
  const params: { category?: string; limit?: number } = {}

  if (category) params.category = category
  if (limit) params.limit = limit

  try {
    const { data } = await axios.get<TProduct[]>(productsUrl, {
      params,
    })

    return data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return console.log(error.message)
    } else {
      return console.log(error as Error)
    }
  }
}
