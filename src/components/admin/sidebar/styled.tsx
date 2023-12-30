import styled from 'styled-components';

export const SidebarContainer = styled.div`
  position: sticky;
  top: 3rem;
  left: 0;
  flex: 1;
  height: calc(100vh - 6rem);
  width: 100%;
  max-width: 16rem;
  margin: 0;
  background-color: var(--white);
  border-right: 1px solid var(--border);

  .sidebarWrapper {
    padding: 1rem;
    color: var(--sub-color);
  }

  .sidebarMenu {
    margin-bottom: 10px;
  }

  .sidebarTitle {
    font-size: 1rem;
    font-weight: bolder;
    color: var(--sub-color);
  }

  .sidebarList {
    list-style: none;
    padding: 0.5rem;
  }

  .sidebarListItem {
    padding: 0.5rem;
    display: flex;
    align-items: center;
    border-radius: 10px;
    cursor: pointer;
  }

  .sidebarListItem.active,
  .sidebarListItem:hover {
    background-color: var(--light-grey);
  }

  .sidebarIcon {
    margin-right: 0.5rem;
    font-size: 1rem;
  }
`;
