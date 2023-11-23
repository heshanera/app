import { Category } from '../../../types';

export const mockProductCategory: Category = {
  name: 'Test Category',
  articleCount: 5,
  categoryArticles: {
    articles: [
      {
        name: 'Product 1',
        variantName: 'Variant A',
        prices: {
          currency: 'USD',
          regular: {
            value: 29.99,
          },
        },
        images: [{ path: 'image1.jpg' }, { path: 'image2.jpg' }, { path: 'image3.jpg' }],
      },
      {
        name: 'Product 2',
        variantName: 'Variant B',
        prices: {
          currency: 'USD',
          regular: {
            value: 49.99,
          },
        },
        images: [{ path: 'image4.jpg' }, { path: 'image5.jpg' }, { path: 'image6.jpg' }],
      },
      {
        name: 'Product 3',
        variantName: 'Variant C',
        prices: {
          currency: 'USD',
          regular: {
            value: 19.99,
          },
        },
        images: [{ path: 'image7.jpg' }, { path: 'image8.jpg' }, { path: 'image9.jpg' }],
      },
    ],
  },
  childrenCategories: {
    list: [
      {
        name: 'Polstermöbel',
        urlPath: 'alle-polstermoebel/',
      },
      {
        name: 'Betten',
        urlPath: 'alle-betten/',
      },
      {
        name: 'Massivholzmöbel',
        urlPath: 'moebel-massivholz/',
      },
      {
        name: 'Wohnzimmer',
        urlPath: 'wohnzimmer-moebel/',
      },
    ],
  },
};

export const mockEmptyProductCategory: Category = {
  name: 'Test Category',
  articleCount: 0,
  categoryArticles: {
    articles: [],
  },
  childrenCategories: {
    list: [
      {
        name: 'Polstermöbel',
        urlPath: 'alle-polstermoebel/',
      },
      {
        name: 'Betten',
        urlPath: 'alle-betten/',
      },
      {
        name: 'Massivholzmöbel',
        urlPath: 'moebel-massivholz/',
      },
      {
        name: 'Wohnzimmer',
        urlPath: 'wohnzimmer-moebel/',
      },
    ],
  },
};
