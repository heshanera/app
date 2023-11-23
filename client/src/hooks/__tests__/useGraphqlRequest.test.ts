import { renderHook } from '@testing-library/react-hooks';
import * as graphqlRequest from 'graphql-request';
import * as graphqlUtils from '../../utils/graphqlUtils';
import { ProductListsResponse, GraphqlError } from '../../types';
import useGraphqlRequest from '../useGraphqlRequest';
import { getProductListMockQuery, productListMock } from '../__mocks__/productRequestMock';

jest.mock('graphql-request', () => ({
  request: jest.fn(),
}));

jest.mock('../../utils/graphqlUtils', () => ({
  extractErrorMessages: jest.fn(),
}));

describe('useGraphqlRequest', () => {
  it('should fetch data successfully', async () => {
    const query = getProductListMockQuery;
    const variables = {};
    const responseData: ProductListsResponse = productListMock;

    const mockRequest = jest.fn(() => Promise.resolve(responseData));
    jest.spyOn(graphqlRequest, 'request').mockImplementation(mockRequest);

    const { result, waitForNextUpdate } = renderHook(() => useGraphqlRequest(query, variables));

    await waitForNextUpdate();
    expect(result.current.isLoading).toBe(false);
    expect(result.current.data).toEqual(responseData);
    expect(result.current.error).toBeNull();
  });

  it('should handle GraphQL errors and set the error state', async () => {
    const query = getProductListMockQuery;
    const variables = {};
    const errorResponse = {
      response: { errors: [{ message: 'GraphQL Error' }], data: null },
    };

    const mockRequest = jest.fn(() => Promise.reject(errorResponse));
    jest.spyOn(graphqlRequest, 'request').mockImplementation(mockRequest);

    const expectedError: GraphqlError[] = [{ message: 'GraphQL Error', extensions: { code: '5' } }];
    jest.spyOn(graphqlUtils, 'extractErrorMessages').mockReturnValue(expectedError);

    const { result, waitForNextUpdate } = renderHook(() => useGraphqlRequest(query, variables));

    await waitForNextUpdate();

    expect(result.current.isLoading).toBe(false);
    expect(result.current.data).toBeNull();
    expect(result.current.error).toEqual(expectedError);
  });

  it('should handle loading state', async () => {
    const query = getProductListMockQuery;
    const variables = {};

    const { result, waitForNextUpdate } = renderHook(() => useGraphqlRequest(query, variables));

    expect(result.current.isLoading).toBe(true);

    await waitForNextUpdate();

    expect(result.current.isLoading).toBe(false);
  });
});
