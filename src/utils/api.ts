import { TCurrentUser, TOrder, TProduct } from '../types';
import axios, { AxiosError, AxiosResponse, HttpStatusCode } from 'axios';

export const BASE_URL = 'https://d1ysyj49rdj569.cloudfront.net/api';
const local = localStorage.getItem('persist:root')
  ? JSON.parse(localStorage.getItem('persist:root') || '')
  : undefined;
const user = local?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { Authorization: `Bearer ${TOKEN}` },
});

export const getProductsList = async (
  category?: string,
  limit?: number
): Promise<TProduct[] | Error | AxiosError> => {
  const params: { category?: string; limit?: number } = {};

  if (category) params.category = category;
  if (limit) params.limit = limit;

  try {
    const { data } = await publicRequest.get<TProduct[]>('/products', {
      params,
    });

    return data;
  } catch (e) {
    if (axios.isAxiosError(e)) {
      const error = e as AxiosError;
      return error;
    } else {
      const error = e as Error;
      return error;
    }
  }
};

export const signInUser = async (
  email: string,
  password: string
): Promise<AxiosResponse<TCurrentUser> | AxiosError> => {
  return await publicRequest
    .post('/auth/login', { email, password })
    .then((res) => res)
    .catch((error) => error as AxiosError);
};

export const updateUser = async (
  email: string,
  username: string
): Promise<AxiosResponse<TCurrentUser> | AxiosError> => {
  return await userRequest
    .put(`/users/${currentUser._id}`, {
      email,
      username,
    })
    .then((res) => res)
    .catch((error) => error as AxiosError);
};

export const signUpUser = async (
  username: string,
  email: string,
  phone: string,
  password: string
): Promise<AxiosResponse<TCurrentUser> | AxiosError> => {
  return await publicRequest
    .post('/auth/register', {
      username,
      email,
      phone,
      password,
    })
    .then((res) => res)
    .catch((error) => error as AxiosError);
};

export const deleteUser = async (): Promise<
  AxiosResponse<{ message: string }> | AxiosError
> => {
  return await userRequest
    .delete(`/users/${currentUser._id}`)
    .then((res) => res)
    .catch((error) => error as AxiosError);
};

export const createOrder = async (
  order: TOrder
): Promise<AxiosResponse<TOrder> | AxiosError> => {
  return await userRequest
    .post(`/orders/${currentUser._id}`, {
      ...order,
    })
    .then((res) => res)
    .catch((error) => error as AxiosError);
};

export const createProduct = async (
  product: TProduct
): Promise<AxiosResponse<TProduct> | AxiosError> => {
  return await userRequest
    .post(`/products`, {
      ...product,
    })
    .then((res) => res)
    .catch((error) => error as AxiosError);
};

export const updateProduct = async (
  product: TProduct
): Promise<AxiosResponse<TProduct> | AxiosError> => {
  return await userRequest
    .put(`/products/${product._id}`, {
      ...product,
    })
    .then((res) => res)
    .catch((error) => error as AxiosError);
};

export const deleteProduct = async (
  productId: string
): Promise<
  | AxiosResponse<{ data: { message: string }; status: HttpStatusCode }>
  | AxiosError
> => {
  return await userRequest
    .delete(`/products/${productId}`)
    .then((res) => res)
    .catch((error) => error as AxiosError);
};
