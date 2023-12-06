import { TProduct } from '../types'
import axios from 'axios'

const BASE_URL = 'http://localhost:5000/api'
const local = JSON.parse(localStorage.getItem('persist:root') || '')
const user = local?.user
const currentUser = user && JSON.parse(user).currentUser
const TOKEN = currentUser?.accessToken

export const publicRequest = axios.create({
  baseURL: BASE_URL,
})

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
})

export const getProductsCollection = async (
  category = '',
  limit = 0,
): Promise<TProduct[] | void> => {
  const params: { category?: string; limit?: number } = {}

  if (category) params.category = category
  if (limit) params.limit = limit

  try {
    const { data } = await publicRequest.get<TProduct[]>('/products', {
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

export const signInUserWithEmailAndPassword = async (
  email: string,
  password: string,
) => {
  if (!email || !password) return

  try {
    return await publicRequest.post('/auth/login', { email, password })
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return console.log(error.message)
    } else {
      return console.log(error as Error)
    }
  }
}
