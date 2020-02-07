const webdriverio = require('webdriverio');
const assert = require('chai').assert;

const opts = {
  port: 4723,
  capabilities: {
    platformName: 'Android',
    platformVersion: '4.4',
    deviceName: 'Android Emulator',
    browserName: 'Chrome'
  }
};

describe('loads the page', function () {
  let client;

  before(async function () {
    client = await webdriverio.remote(opts);
  });

  after(async function () {
    return await client.deleteSession();
  });

  it('should load the page', async function () {
    await client.url('https://www.google.com');

    const title = await client.getTitle();
    assert.equal(title, 'Google');
  });
});

