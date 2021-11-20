
const {notarize} = require('electron-notarize');
const {PRODUCT_ID} = require('./config.json');

exports.default = async function notarizing(context) {
  const {electronPlatformName, appOutDir} = context;
  if (!Boolean(process.env.APPLE_ID)){
    return;
  }
  if (electronPlatformName !== 'darwin') {
    return;
  }

  const appName = context.packager.appInfo.productFilename;

  return await notarize({
    appBundleId: `com.${PRODUCT_ID.toLowerCase()}`,
    appPath: `${appOutDir}/${appName}.app`,
    appleId: process.env.APPLE_ID,
    appleIdPassword: '@keychain:AC_PASSWORD',
  });
};
