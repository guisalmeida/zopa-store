import styled from 'styled-components';
import { Publish } from '@styled-icons/material/Publish';
import { CloseCircle } from '@styled-icons/remix-fill/CloseCircle';

export const NewProductContainer = styled.div`
  flex: 4;

  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);

  padding: 2rem;
  border-radius: 1rem;
  background-color: var(--white);

  margin: 2rem;

  .edit-product__title {
    font-size: 2rem;
    font-weight: bolder;
    border-bottom: 1px solid var(--dark);
    margin: 0 0 1rem;
  }

  .edit-product__Form {
    margin-top: 1rem;
  }

  .edit-product__item {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  }

  .edit-product__item > label {
    margin-bottom: 0.5rem;
    font-size: 1rem;
    font-weight: 600;
    color: var(--dark);
  }

  .edit-product__item > input:not([type='file']) {
    height: 2rem;
    padding: 1rem;
    border: 1px solid var(--border);
    border-radius: 0.5rem;
  }

  .edit-product__image--container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 0;

    input[type='file'] {
      display: none;
    }

    label.edit-product__label {
      background-color: var(--highlight);
      color: var(--white);
      cursor: pointer;
      border-radius: 0.5rem;
      transition: all ease 0.3s;
      height: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
      text-transform: uppercase;
      font-weight: bolder;
      font-size: 1rem;
      width: calc(50% - 1rem);

      @media (hover: hover) {
        &:hover {
          background-color: var(--grey);
          color: var(--black);
        }
      }
    }

    button {
      width: calc(50% - 1rem);
    }
  }

  .edit-product__Select {
    height: 2rem;
    padding: 0 1rem;
    border-radius: 0.5rem;
  }

  .edit-product__button {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 1rem;
    background-color: var(--highlight);
    color: var(--white);
    font-weight: 600;
    cursor: pointer;
  }

  .edit-product__images {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 0 0 1rem;

    figure {
      width: 8rem;
      height: 8rem;
      border-radius: 0.5rem;
      overflow: hidden;
      border: 2px solid var(--highlight);
      margin-right: 1rem;
      position: relative;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      button {
        position: absolute;
        top: 0rem;
        right: 0rem;
        padding: 0;
        margin: 0;
      }
    }
  }
`;

export const PublishIcon = styled(Publish)`
  width: 1rem;
  margin-right: 0.5rem;
`;

export const RemoveImageIcon = styled(CloseCircle)`
  width: 1.5rem;
  color: var(--highlight);
  border-radius: 1rem;
`;
