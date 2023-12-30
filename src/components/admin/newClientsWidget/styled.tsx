import styled from 'styled-components';

export const NewClientsWidgetContainer = styled.div`
  flex: 1;
  padding: 2rem;
  border: 1px solid var(--border);
  border-radius: 1rem;
  margin: 0;
  margin-right: 2rem;

  .newClientsWidgetTitle {
    font-size: 22px;
    font-weight: 600;
  }

  .newClientsWidgetImg {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
  }

  .newClientsWidgetList {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .newClientsWidgetListItem {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px 0px;
  }

  .newClientsWidgetUser {
    display: flex;
    flex-direction: column;
  }

  .newClientsWidgetUsername {
    font-weight: 600;
  }

  .newClientsWidgetUserTitle {
    font-weight: 300;
  }

  .newClientsWidgetButton {
    display: flex;
    align-items: center;
    border: none;
    border-radius: 10px;
    padding: 7px 10px;
    background-color: #eeeef7;
    color: #555;
    cursor: pointer;
  }

  .newClientsWidgetIcon {
    font-size: 16px !important;
    margin-right: 5px;
  }
`;
