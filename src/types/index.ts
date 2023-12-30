export type TSize = {
  available: boolean;
  size: string;
  _id?: string;
};

export type TProduct = {
  _id?: string;
  name: string;
  images: string[];
  onSale: boolean;
  description: string;
  quantity: number;
  price: number;
  oldPrice: number;
  discount: number;
  categories: string[];
  colors: string[];
  selectedSize: string;
  sizes: TSize[];
  inStock: boolean;
  updatedAt?: string;
};

export type TCurrentUser = {
  _id: string;
  username: string;
  email: string;
  phone: string;
  isAdmin: boolean;
  password?: string;
  passwordChangedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
  accessToken?: string;
  __v?: number;
};

export type TOrder = {
  userId: string;
  products: {
    productId: string;
    quantity: number;
  }[];
  amount: number;
  address: {
    city: string;
    state: string;
    line1: string;
    line2: string;
    postal_code: string;
    country: string;
  };
  status?: string;
  _id?: string;
  createdAt?: string;
  updatedAt?: string;
};
