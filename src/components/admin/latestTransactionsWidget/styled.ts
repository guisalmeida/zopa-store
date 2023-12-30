import styled from 'styled-components';

export const LatestTransactionsWidgetContainer = styled.div`
  flex: 2;
  padding: 2rem;
  border: 1px solid var(--border);
  border-radius: 1rem;
  margin: 0;

  .latestTransactionsWidgetTitle {
    font-size: 22px;
    font-weight: 600;
  }

  .latestTransactionsWidgetTable {
    width: 100%;
    border-spacing: 20px;
  }

  .latestTransactionsWidgetTh {
    text-align: left;
  }

  .latestTransactionsWidgetUser {
    display: flex;
    align-items: center;
    font-weight: 600;
  }

  .latestTransactionsWidgetImg {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 10px;
  }

  .latestTransactionsWidgetDate,
  .latestTransactionsWidgetAmount {
    font-weight: 300;
  }

  .latestTransactionsWidgetButton {
    padding: 5px 7px;
    border: none;
    border-radius: 10px;
  }

  .latestTransactionsWidgetButton.approved {
    background-color: #e5faf2;
    color: #3bb077;
  }
  .latestTransactionsWidgetButton.declined {
    background-color: #fff0f1;
    color: #d95087;
  }
  .latestTransactionsWidgetButton.pending {
    background-color: #ebf1fe;
    color: #2a7ade;
  }
`;
