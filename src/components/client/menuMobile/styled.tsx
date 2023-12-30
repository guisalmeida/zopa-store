import styled from 'styled-components';

export const MenuContainer = styled.nav`
  width: 100%;
  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  ul {
    display: flex;
    align-items: center;
    flex-direction: column;

    li {
      margin: 1rem 0;
    }

    a,
    button {
      text-decoration: none;
      color: var(--main-color);
      text-transform: capitalize;
      font-size: 2rem;

      &.selected {
        text-decoration: underline;
      }

      @media (hover: hover) {
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;
