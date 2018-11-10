const {hello}= require('./handler')

describe('handler', () => {
  it('works', async () => {
    const response = await hello()
    expect(response.body).toEqual('Hello from beta');
    expect(response.statusCode).toEqual(200);
  })
});