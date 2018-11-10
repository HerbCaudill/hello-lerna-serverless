const {hello}= require('./handler')

describe('handler', () => {
  it('works', async () => {
    const response = await hello()
    expect(response.body).toEqual('Hello from alpha');
    expect(response.statusCode).toEqual(200);
  })
});