import styled from 'styled-components';

export const ChartContainer = styled.div`
  margin: 2rem 0;
  padding: 1rem;
  border-radius: 1rem;
  border: 1px solid var(--border);

  h3.chart__title {
    margin-bottom: 1rem;
  }

  .chart__tooltip {
    background-color: var(--highlight);
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;

    p {
      color: var(--white);
      font-weight: 600;
      margin: 0 0 0.25rem;
    }
  }
`;

export const ChartWrapper = styled.div`
  margin: 2rem 0;
`;
