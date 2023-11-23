import { useEffect, useState } from 'react';
import { Article } from '../types';
import { isSubstring } from '../utils/stringUtils';

const useProductFilter = (searchText: string, productsList: Article[]): Article[] => {
  const [filteredProducts, setFilteredProducts] = useState<Article[]>([]);

  useEffect(() => {
    let updatedList: Article[] = productsList;
    if (searchText.length > 0) {
      updatedList = productsList?.filter((article: Article) => isSubstring(article.name, searchText));
    }
    setFilteredProducts(updatedList);
  }, [searchText, productsList]);

  return filteredProducts;
};

export default useProductFilter;
