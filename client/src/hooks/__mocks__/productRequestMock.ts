import { ProductListsResponse } from '../../types';

export const getProductListMockQuery = `
  query getProductList() {
    categories: productLists(ids: 123456, locale: en_US) {
        name
        articleCount
        childrenCategories: childrenProductLists {
          list {
            name
            urlPath
          }
        }
        categoryArticles: articlesList(first: 50) {
          articles {
            name
            variantName
            prices {
              currency
              regular {
                value
              }
            }
            images(
              format: WEBP
              maxWidth: 200
              maxHeight: 200
              limit: 4
            ) {
              path
            }
          }
        }
    }
  }
`;

export const productListMock: ProductListsResponse = {
  categories: [
    {
      name: 'Möbel',
      articleCount: 174373,
      childrenCategories: {
        list: [
          {
            name: 'Polstermöbel',
            urlPath: 'alle-polstermoebel/',
          },
        ],
      },
      categoryArticles: {
        articles: [
          {
            name: 'Nachttisch 2 Schubladen',
            variantName: 'Braun - Holzwerkstoff - 29 x 51 x 45 cm',
            prices: {
              currency: 'EUR',
              regular: {
                value: 8990,
              },
            },
            images: [
              {
                path: '',
              },
            ],
          },
        ],
      },
    },
  ],
};
