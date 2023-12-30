import styled from 'styled-components';

export const NewUserContainer = styled.div`
  flex: 4;

  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);

  padding: 2rem;
  border-radius: 1rem;
  background-color: var(--white);

  margin: 2rem;

  .newUserTitle {
    font-size: 2rem;
    font-weight: bolder;
    border-bottom: 1px solid var(--dark);
    margin: 0 0 1rem;
  }

  .newUserForm {
    display: flex;
    flex-wrap: wrap;
  }

  .newUserItem {
    width: 400px;
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    margin-right: 20px;
  }

  .newUserItem > label {
    margin-bottom: 0.5rem;
    font-size: 1rem;
    font-weight: 600;
    color: var(--dark);
  }

  .newUserItem > input {
    height: 2rem;
    padding: 1rem;
    border: 1px solid var(--border);
    border-radius: 0.5rem;
  }

  .newUserSelect {
    height: 2rem;
    padding: 0 1rem;
    border-radius: 0.5rem;
  }

  .newUserButton {
    width: 100%;
    max-width: 400px;
    padding: 0.5rem 1rem;
    color: var(--white);
    background-color: var(--highlight);
    border: none;
    font-weight: 600;
    border-radius: 0.5rem;
    margin-top: 2rem;
    cursor: pointer;
    height: 2rem;
    align-self: end;
  }
`;
