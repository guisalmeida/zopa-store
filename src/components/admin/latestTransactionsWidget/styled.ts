import styled from 'styled-components';

export const LatestTransactionsWidgetContainer = styled.div`
  margin: 1rem 0 2rem;

  .latest-transactions-widget__title {
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  .latest-transactions-widget__table {
    width: 100%;
    border-spacing: 20px;
  }

  .latest-transactions-widget__th {
    text-align: left;
  }

  .latest-transactions-widget__User {
    display: flex;
    align-items: center;
  }

  .latest-transactions-widget__Img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
  }

  .latest-transactions-widget__Date,
  .latest-transactions-widget__Amount {
    font-weight: 300;
  }

  .latest-transactions-widget__Button {
    padding: 5px 7px;
    border: none;
    border-radius: 10px;
  }

  .latest-transactions-widget__Button.approved {
    background-color: #e5faf2;
    color: #3bb077;
  }
  .latest-transactions-widget__Button.declined {
    background-color: #fff0f1;
    color: #d95087;
  }
  .latest-transactions-widget__Button.pending {
    background-color: #ebf1fe;
    color: #2a7ade;
  }
`;
