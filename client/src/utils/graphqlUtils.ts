import { GraphqlError, GraphqlErrorResponse } from '../types';

export const extractErrorMessages = (errorResponse: GraphqlErrorResponse): GraphqlError[] => {
  const errors: GraphqlError[] = [];
  errorResponse?.response?.errors?.forEach((element: GraphqlError) => {
    errors.push({ message: element?.message, extensions: element?.extensions });
  });
  return errors;
};
