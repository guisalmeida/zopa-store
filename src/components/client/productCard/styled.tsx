import styled from 'styled-components';

export const ProductCardContainer = styled.div`
  background: var(--white);
  /* box-shadow: 0 0.1rem 0.5rem rgba(0, 0, 0, 0.1); */
  text-align: center;
  overflow: hidden;
  max-width: var(--break-small);
  height: 100%;

  @media (hover: hover) {
    &:hover {
      img {
        scale: 1.2;
      }
    }
  }

  a {
    text-decoration: none;
    display: inline-block;
    height: 100%;
    width: 100%;
  }

  .product-card__image {
    position: relative;
    margin: 0;
    height: calc(100% - 6rem);
    overflow: hidden;

    img {
      max-width: 100%;
      max-height: 100%;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: all 0.5s ease;
    }

    .product-card__discount {
      background: var(--dark);
      color: var(--white);
      padding: 0.2rem;
      font-size: 0.75rem;
      line-height: 1;
      position: absolute;
      top: 0;
      right: 0;
      z-index: 8;
    }
  }

  .product-card__details {
    padding: 1rem;
    min-height: 6rem;
    height: auto;

    .product-card__name {
      color: var(--dark);
      font-size: 1rem;
      font-weight: 700;
      text-decoration: none;
      margin: 0 0 0.5rem;
      text-overflow: ellipsis;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      padding: 0 0.5rem;
      text-transform: capitalize;
    }

    .product-card__pricing {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      margin: 0;
      height: auto;

      .product-card__price {
        font-size: 1rem;
        color: var(--dark);
        font-weight: bold;

        &--old {
          color: var(--grey);
          text-decoration: line-through;
        }
      }
    }

    .product-card__sold-out {
      font-size: 1rem;
      font-weight: bold;
      color: var(--grey);
      text-decoration: line-through;
    }
  }
`;
