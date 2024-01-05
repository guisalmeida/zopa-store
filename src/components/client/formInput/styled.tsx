import styled, { css } from 'styled-components';

export const FormLabel = styled.label`
  font-size: 1rem;
  color: var(--dark);
  font-weight: normal;
  pointer-events: none;
  transition: 300ms ease all;
`;

export const Input = styled.input`
  background: none;
  background-color: var(--light-grey);
  color: var(--dark);
  font-size: 1rem;
  padding: 1rem;
  display: block;
  width: 100%;
  border: none;
  border: 1px solid var(--border);
  border-radius: 0.5rem;
  margin: 0.5rem 0 1rem;

  &:disabled {
    background-color: var(--border);
    color: var(--grey);
  }

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: var(--grey);
  }
`;

export const FormGroup = styled.div`
  position: relative;
  margin: 1rem 0;
`;
