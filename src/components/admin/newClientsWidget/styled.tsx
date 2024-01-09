import styled from 'styled-components';

export const NewClientsWidgetContainer = styled.div`
  margin: 0;

  .new-clients-widget__title {
    font-size: 22px;
    font-weight: 600;
    margin: 1rem 0;
  }

  .new-clients-widget__Img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
  }

  .new-clients-widget__list {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .new-clients-widget__list-item {
    display: flex;
    align-items: center;
    margin: 20px 0px;
  }

  .new-clients-widget__user {
    display: flex;
    flex-direction: column;
    margin-right: 1rem;
  }

  .new-clients-widget__username {
    font-weight: 600;
  }

  .new-clients-widget__userTitle {
    font-weight: 300;
  }

  .new-clients-widget__button {
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 1rem;
    background-color: var(--highlight);
    color: var(--white);
    cursor: pointer;
  }

  .new-clients-widget__icon {
    font-size: 16px !important;
    margin-right: 5px;
  }
`;
