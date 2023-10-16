import styled from "styled-components"

export const ProductCardContainer = styled.div`
  background:var(--white);
  border-radius: .5rem;
  box-shadow: 0 .1rem .5rem rgba(0, 0, 0, 0.1);
  text-align: center;
  overflow: hidden;

  a {
    text-decoration: none;
    display: inline-block;
    height: 100%;
    width: 100%;
  }

  .product-card__image {
    position: relative;
    margin: 0;
    height: 70%;

    img {
      max-width: 100%;
      max-height: 100%;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .product-card__discount {
      background:var(--dark);
      color:var(--white);
      padding: 0.2rem;
      font-size: 0.75rem;
      line-height: 1;
      position: absolute;
      top: 0;
      right: 0;
    }
  }

  .product-card__name {
    color:var(--dark);
    font-size: 1rem;
    font-weight: 700;
    text-decoration: none;
    margin: 1rem 0 0.5rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    padding: 0 0.5rem;
    text-transform: capitalize;
  }

  .product-card__pricing {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin: 0 0 1.6rem;

    .product-card__price {
      font-size: 1rem;
      color:var(--dark);
      font-weight: bold;

      &--old {
        font-size: 0.75rem;
        color:var(--grey);
        text-decoration: line-through;
        margin-right: 1rem;
      }
    }
  }
`

