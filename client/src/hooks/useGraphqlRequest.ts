import { useEffect, useState } from 'react';
import { request } from 'graphql-request';
import { GraphqlError, GraphqlErrorResponse, GraphResponse } from '../types';
import { extractErrorMessages } from '../utils/graphqlUtils';

/**
 * Custom hook for making GraphQL requests.
 * @template T - The type of data expected in the GraphQL response.
 * @template V - The type of variables to be passed with the GraphQL query.
 * @param {string} query - The GraphQL query string.
 * @param {V} variables - The variables to be passed with the GraphQL query.
 * @returns {GraphResponse<T>} - An object containing the result of the GraphQL request.
 */
const useGraphqlRequest = <T, V>(query: string, variables: V): GraphResponse<T> => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<GraphqlError[] | null>(null);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        setIsLoading(true);
        const response: T = await request('/graphql', query, variables);
        setData(response);
      } catch (e) {
        setError(extractErrorMessages(e as GraphqlErrorResponse));
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [query, variables]);

  return { isLoading, data, error };
};

export default useGraphqlRequest;
