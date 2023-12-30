import styled from 'styled-components';

export const FeaturedContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  .featuredItem {
    flex: 1;
    margin: 0;
    padding: 2rem;
    border-radius: 1rem;
    border: 1px solid var(--border);
    cursor: pointer;
  }

  .featuredItem:not(:last-child) {
    margin-right: 2rem;
  }

  .featuredTitle {
    font-size: 20px;
  }

  .featuredMoneyContainer {
    margin: 10px 0px;
    display: flex;
    align-items: center;
  }

  .featuredMoney {
    font-size: 30px;
    font-weight: 600;
  }

  .featuredMoneyRate {
    display: flex;
    align-items: center;
    margin-left: 20px;
  }

  .featuredIcon {
    font-size: 14px;
    margin-left: 5px;
    color: green;
  }

  .featuredIcon.negative {
    color: red;
  }

  .featuredSub {
    font-size: 15px;
    color: gray;
  }
`;
