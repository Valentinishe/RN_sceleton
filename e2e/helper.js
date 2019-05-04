const detox = require('detox');
const config = require('../package.json').detox;

async function reload() {
  if (typeof(device) == 'undefined') {
    await detox.init(config);
  }
  await device.reloadReactNative();
}

module.exports = {
    reload
}

