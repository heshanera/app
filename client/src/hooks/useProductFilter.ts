import { useEffect, useState } from 'react';
import { Article } from '../types';
import { isSubstring } from '../utils/stringUtils';

/**
 * Filter product list by name without case sensitivity
 * @param {string} searchText - keyword for searching
 * @param {Article[]} productsList - product list to be filtered
 * @return {Article[]} - filtered product list by name
 */
const useProductFilter = (searchText: string, productsList: Article[]): Article[] => {
  const [filteredProducts, setFilteredProducts] = useState<Article[]>([]);

  useEffect(() => {
    let updatedList: Article[] = productsList;
    // if the search text is empty return all available products
    if (searchText.length > 0) {
      updatedList = productsList?.filter((article: Article) => isSubstring(article.name, searchText));
    }
    setFilteredProducts(updatedList);
  }, [searchText, productsList]);

  return filteredProducts;
};

export default useProductFilter;
