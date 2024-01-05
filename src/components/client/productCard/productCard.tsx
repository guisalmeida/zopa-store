import { Link } from 'react-router-dom';
import { ProductCardContainer } from './styled';
import { TProduct } from '../../../types';
import { priceToStringBr } from '../../../utils/currency';

type ProductCardProps = {
  product: TProduct;
};

const ProductCard = ({ product }: ProductCardProps): React.JSX.Element => {
  return (
    <ProductCardContainer>
      <Link to={`/product/${product._id}`}>
        <figure className="product-card__image">
          {product.onSale && (
            <span className="product-card__discount">
              {`-${product.discount}%`}
            </span>
          )}
          <img
            src={
              product.images[0] ||
              'https://via.placeholder.com/470x594/FFFFFF/?text=Image+Not+Found'
            }
            alt={`Product ${product.name}`}
            title={product.name}
          />
        </figure>

        <div className="product-card__details">
          <h3 className="product-card__name">{product.name}</h3>
          {product.inStock ? (
            <div className="product-card__pricing">
              {product.onSale && (
                <span className="product-card__price product-card__price--old">
                  {product && priceToStringBr(product.oldPrice)}
                </span>
              )}
              <span className="product-card__price">
                {product && priceToStringBr(product.price)}
              </span>
            </div>
          ) : (
            <span className="product-card__sold-out">Sold Out</span>
          )}
        </div>
      </Link>
    </ProductCardContainer>
  );
};

export default ProductCard;
