/* eslint-disable no-console */
const Application = require('spectron').Application;
// const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const electron = require('electron');
const path = require('path');

const appPath = path.join(__dirname, '../../translationCore/src/main.js');
console.log('appPath', appPath);

// global.before(() => {
//   chai.should();
//   chai.use(chaiAsPromised);
// });

module.exports = {
  async startApp() {
    const app = await new Application({
      path: electron,
      args: [appPath]
    }).start();
    chaiAsPromised.transferPromiseness = app.transferPromiseness;
    return app;
  },

  async stopApp(app) {
    if (app && app.isRunning()) {
      await app.stop();
    }
  }
};
