import { gql } from 'graphql-request';

export const getProductListQuery = gql`
  query getProductList($ids: [String!]!, $locale: Locale!, $first: Int!, $offset: Int) {
    categories: productLists(ids: $ids, locale: $locale) {
      name
      articleCount
      childrenCategories: childrenProductLists {
        list {
          name
          urlPath
        }
      }
      categoryArticles: articlesList(first: $first, offset: $offset) {
        articles {
          name
          variantName
          prices {
            currency
            regular {
              value
            }
          }
          images(format: WEBP, maxWidth: 200, maxHeight: 200, limit: 4) {
            path
          }
        }
      }
    }
  }
`;
