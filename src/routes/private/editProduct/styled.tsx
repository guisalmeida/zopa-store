import styled from 'styled-components';
import { Publish } from '@styled-icons/material/Publish';
import { AddPhotoAlternate } from '@styled-icons/material/AddPhotoAlternate';
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
  }

  input[type='file'] {
    display: none;
  }

  label.edit-product__label {
    background-color: var(--white);
    color: var(--grey);
    cursor: pointer;
    border: 2px dotted var(--grey);
    border-radius: 0.5rem;
    transition: all ease 0.3s;
    min-height: 8rem;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-transform: uppercase;
    font-weight: bolder;
    font-size: 1rem;
    width: 100%;
    padding: 1rem;

    p.edit-product__label--files-accept {
      font-size: 0.75rem;
      font-weight: 400;
      margin: 0.25rem 0;
    }

    p.edit-product__label--files-selected {
      font-weight: 400;
      font-size: 0.75rem;
      color: var(--highlight);
      margin: 0.25rem 0;
    }
  }

  button.edit-product__label--button {
    width: 100%;

    &:disabled {
      background-color: var(--grey);
      color: var(--white);
      cursor: not-allowed;
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

export const AddPhotoAlternateIcon = styled(AddPhotoAlternate)`
  color: var(--grey);
  width: 2rem;
  display: block;
`;
