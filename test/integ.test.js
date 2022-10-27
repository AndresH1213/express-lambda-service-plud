const axios = require('axios');

test('Service return hello world', async () => {
  try {
    const response = await axios.get(process.env.SERVICE_ENDPOINT);
    expect(response.data).toBe('Hello world');
  } catch (e) {
    console.error(e);
    throw e;
  }
});
