import { GraphqlError, GraphqlErrorResponse } from '../types';

/**
 * Extracts error messages from a GraphQL error response.
 * @param {GraphqlErrorResponse} errorResponse - The GraphQL error response containing an array of errors.
 * @returns {GraphqlError[]} - An array of extracted error objects containing 'message' and 'extensions'.
 */
export const extractErrorMessages = (errorResponse: GraphqlErrorResponse): GraphqlError[] => {
  const errors: GraphqlError[] = [];
  errorResponse?.response?.errors?.forEach((element: GraphqlError) => {
    errors.push({ message: element?.message, extensions: element?.extensions });
  });
  return errors;
};
