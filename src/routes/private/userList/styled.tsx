import styled from 'styled-components';

import { PersonDelete } from '@styled-icons/evaicons-solid/PersonDelete'

export const UserListContainer = styled.div`
  flex: 4;

  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);

  padding: 2rem;
  border-radius: 1rem;
  background-color: var(--white);

  margin: 2rem;

  .userListUser {
    display: flex;
    align-items: center;
  }

  .userListImg {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
  }

  .userListEdit {
    border: none;
    border-radius: 1rem;
    padding: 0.5rem 1rem;
    background-color: var(--highlight);
    color: white;
    cursor: pointer;
  }
`;

export const PersonDeleteIcon = styled(PersonDelete)`
  color: var(--red);
  cursor: pointer;
  width: 2rem;
`