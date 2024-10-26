import styled from 'styled-components';
import media from 'styled-media-query';

export const FeatureWidgetContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 3rem 2fr;
  gap: 1rem;
  margin: 3rem auto;
  width: 100%;
  max-width: var(--break-large);
  background-color: var(--white);
  padding: 1rem;

  ${media.lessThan('medium')`
      grid-template-columns: 1fr;
  `}

  ${media.lessThan('large')`
    max-width: var(--break-medium);
  `}

  
  h2 {
    font-size: 2rem;
    font-weight: bolder;
    margin-left: 2rem;
    font-family: var(--secondary-font);
    font-style: italic;

    ${media.lessThan('medium')`
      text-align: center;
      margin: 0;
    `}

    ${media.lessThan('small')`
      font-size: 1.5rem;
    `}
  }

  picture {
    width: 100%;
    grid-row: 1 / 3;

    ${media.lessThan('medium')`
      display: none;
    `}

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .swiper {
    width: 100%;
    padding: 0 2rem;
    grid-row: 2 / 3;

    .swiper-slide {
      padding: 0 0 1rem;
    }

    .swiper-button-prev,
    .swiper-button-next {
      color: var(--dark);
      width: 1rem;
    }

    .swiper-button-prev::after,
    .swiper-button-next::after {
      font-size: 2rem;
    }

    .swiper-button-prev {
      left: 0;
    }

    .swiper-button-next {
      right: 0;
    }

    .swiper-pagination-bullet-active {
      background-color: var(--dark);
    }
  }
`;
