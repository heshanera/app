import { useEffect, useState } from 'react';
import { request } from 'graphql-request';
import { GraphqlError, GraphqlErrorResponse, GraphResponse } from '../types';
import { extractErrorMessages } from '../utils/graphqlUtils';

const useGraphqlRequest = <T, V>(query: string, variables: V): GraphResponse<T> => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<GraphqlError[] | null>(null);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        setIsLoading(true);
        const response = await request<T, V>('/graphql', query, variables);
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
