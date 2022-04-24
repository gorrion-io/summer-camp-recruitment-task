const axios = require('axios');
const { listenerCount } = require('process');
const { isArray } = require('util');

describe('Check we get users from our API and bad request handling', () => {
  // test get request
  test('check if we get Array of users', async () => {
    const response = await axios.get('http://localhost:3000/api/users');

    expect(
      response.data.length > 0 && Array.isArray(response.data)
    ).toBeTruthy();
  });
});
