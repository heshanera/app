import { extractErrorMessages } from '../graphqlUtils';

describe('extractErrorMessages functionality', () => {
  it('extracts error messages from a valid error response', () => {
    const errorResponse = {
      response: {
        errors: [
          { message: 'Error 1', extensions: { code: 'ERROR_CODE_1' } },
          { message: 'Error 2', extensions: { code: 'ERROR_CODE_2' } },
        ],
        data: null,
      },
    };
    const result = extractErrorMessages(errorResponse);
    const expected = [
      { message: 'Error 1', extensions: { code: 'ERROR_CODE_1' } },
      { message: 'Error 2', extensions: { code: 'ERROR_CODE_2' } },
    ];
    expect(result).toEqual(expected);
  });
});
