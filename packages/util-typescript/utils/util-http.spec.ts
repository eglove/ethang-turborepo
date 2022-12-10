import { fetcher } from './util-http';

describe('fetcher', () => {
  it('should fetch the specified URL and return the response as JSON', async () => {
    const mockResponse = {
      json: jest.fn(async () => {
        return { data: 'Hello, world!' };
      }),
      status: 200,
    };

    // @ts-expect-error it's fine
    // eslint-disable-next-line no-global-assign
    fetch = jest.fn(async () => {
      return mockResponse;
    });

    const response = await fetcher<{ data: string }>(
      'https://example.com/api/v1/test'
    );

    expect(fetch).toHaveBeenCalledWith('https://example.com/api/v1/test');
    expect(response).toEqual({ data: 'Hello, world!' });
  });
});
