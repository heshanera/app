import { Article } from '../../types';

export const mockProductsList: Article[] = [
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
  {
    name: 'Product 4',
    variantName: 'Variant D',
    prices: {
      currency: 'USD',
      regular: {
        value: 39.99,
      },
    },
    images: [{ path: 'image10.jpg' }, { path: 'image11.jpg' }, { path: 'image12.jpg' }],
  },
  {
    name: 'Product 5',
    variantName: 'Variant E',
    prices: {
      currency: 'USD',
      regular: {
        value: 59.99,
      },
    },
    images: [{ path: 'image13.jpg' }, { path: 'image14.jpg' }, { path: 'image15.jpg' }],
  },
  {
    name: 'Product 6',
    variantName: 'Variant F',
    prices: {
      currency: 'USD',
      regular: {
        value: 24.99,
      },
    },
    images: [{ path: 'image16.jpg' }, { path: 'image17.jpg' }, { path: 'image18.jpg' }],
  },
];

export const mockUpdatedProductsList: Article[] = [
  {
    name: 'Product 7',
    variantName: 'Variant G',
    prices: {
      currency: 'USD',
      regular: {
        value: 34.99,
      },
    },
    images: [{ path: 'image19.jpg' }, { path: 'image20.jpg' }, { path: 'image21.jpg' }],
  },
];
