export type TSize = {
  available: boolean
  size: string
  _id: string
}

export type TProduct = {
  name: string
  images: string[]
  _id: string
  onSale: boolean
  description: string
  quantity: number
  price: number
  oldPrice: number
  discount: number
  categories: string[]
  colors: string[]
  size: TSize
  selectedSize: string
  sizes: TSize[]
  inStock: boolean
}
