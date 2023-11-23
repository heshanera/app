import { Image } from './image';
import { Price } from './price';

export type Article = {
  name: string;
  variantName: string;
  prices: Price;
  images: Image[];
};

export type ArticleCategory = {
  name: string;
  urlPath: string;
};

export type ChildCategory = {
  list: ArticleCategory[];
};

export type CategoryArticles = {
  articles: Article[];
};

export type Category = {
  name: string;
  categoryArticles: CategoryArticles;
  articleCount: number;
  childrenCategories: ChildCategory;
};

export type ProductListsResponse = {
  categories: Category[];
};

export type ProductListVariables = {
  ids: string;
  locale: string;
  first: number;
  offset?: number;
};
