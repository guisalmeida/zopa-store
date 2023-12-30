import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { priceToStringBr } from '../../../utils/currency';
import { TProduct } from '../../../types';

import { setIsCartOpen, addToCart } from '../../../store/actions/cartActions';
import { selectCartProducts } from '../../../store/selectors/cartSelectors';
import {
  selectAllProducts,
  selectIsLoading,
} from '../../../store/selectors/productsSelectors';

import Spinner from '../../../components/client/spinner/spinner';
import { ProductContainer } from './styled';

const Product = () => {
  const dispatch = useDispatch();

  const isLoading: boolean = useSelector(selectIsLoading);
  const allProducts: TProduct[] = useSelector(selectAllProducts);
  const cartProducts: TProduct[] = useSelector(selectCartProducts);

  const [selectedSize, setSelectedSize] = useState('');
  const [sizeError, setSizeError] = useState(false);

  const productId = window.location.pathname.split('/')[2];
  const product = allProducts.find((product) => product._id === productId);

  const handleSize = (_id: string): void => {
    if (_id === selectedSize) {
      setSelectedSize('');
      return;
    }
    product ? (product.selectedSize = _id) : '';
    setSelectedSize(_id);
    setSizeError(false);
  };

  const handleAddToCart = (): void => {
    if (!product) return;
    if (!selectedSize) {
      return setSizeError(true);
    }

    dispatch(setIsCartOpen(true));
    dispatch(addToCart(cartProducts, product));
    setSelectedSize('');
  };

  return (
    <ProductContainer>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <figure className="product__image">
            {product?.images.map((image, index) => (
              <img
                src={
                  image ||
                  'https://via.placeholder.com/470x594/FFFFFF/?text=Image+Not+Found'
                }
                alt={product?.name}
                title={product?.name}
                key={index}
              />
            ))}
          </figure>

          <div className="product__content">
            <h3 className="product__name">{product?.name}</h3>
            <p className='product__description'>{product?.description}</p>
            <div className="product__pricing">
              {product?.onSale && (
                <span className="product__price product__price--old">
                  {product && priceToStringBr(product.oldPrice)}
                </span>
              )}
              <span className="product__price">
                {product && priceToStringBr(product.price)}
              </span>
              {/* <span className="product__price product__price--installments">
                or {product?.installments}
              </span> */}
            </div>

            <div className="product__sizes">
              <p className="product__description">Tamanhos disponíveis:</p>

              {sizeError && (
                <p className="product__description product__description--warning">
                  É necessário escolher um tamanho!
                </p>
              )}

              <div className="product__btn-group">
                {product?.sizes.map(
                  (productSize, index) =>
                    productSize.available && (
                      <button
                        key={index}
                        type="button"
                        className={`product__filter ${selectedSize === productSize._id
                          ? 'product__filter--selected'
                          : ''
                          }`}
                        onClick={() => {
                          handleSize(productSize._id as string);
                        }}
                      >
                        {productSize.size}
                      </button>
                    )
                )}
              </div>
            </div>

            <div className="product__actions">
              <button
                type="button"
                className="product__add-to-cart"
                onClick={handleAddToCart}
              >
                Adicionar ao carrinho
              </button>
            </div>
          </div>
        </>
      )}
    </ProductContainer>
  );
};

export default Product;
