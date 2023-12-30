import styled from 'styled-components'

export const NewProductContainer = styled.div`
  flex: 4;

  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);

  padding: 2rem;
  border-radius: 1rem;
  background-color: var(--white);

  margin: 2rem;

  .addProductTitle {
    font-size: 2rem;
    font-weight: bolder;
    border-bottom: 1px solid var(--dark);
    margin: 0 0 1rem;
  }

  .addProductForm {
    margin-top: 1rem;
  }
  
  .addProductItem {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  }
  
  .addProductItem > label {
    margin-bottom: 0.5rem;
    font-size: 1rem;
    font-weight: 600;
    color: var(--dark);
  }
  
  .addProductItem > input:not([type="file"]) {
    height: 2rem;
    padding: 1rem;
    border: 1px solid var(--border);
    border-radius: 0.5rem;
  }

  .addProductSelect {
    height: 2rem;
    padding: 0 1rem;
    border-radius: 0.5rem;
  }
  
  .addProductButton {
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 1rem;
    background-color: var(--highlight);
    color: var(--white);
    font-weight: 600;
    cursor: pointer;
  }
  


`

