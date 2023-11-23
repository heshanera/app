export type GraphqlErrorExtension = {
  code: string;
};

export type GraphqlError = {
  message: string;
  extensions: GraphqlErrorExtension;
};

export type GraphqlErrorResponse = {
  response: {
    errors: GraphqlError[];
    data: null;
  };
};

export type GraphResponse<T> = {
  isLoading: boolean;
  data: T | null;
  error: GraphqlError[] | null;
};
