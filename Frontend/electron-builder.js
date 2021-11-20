
const {PRODUCT_ID} = require('./config.json');
module.exports = {
  appId: `com.${PRODUCT_ID.toLowerCase()}`,
  productName: PRODUCT_ID,
  directories: {
    output: './out',
    app: './.electron',
  },
  linux: {
    target: ['AppImage'],
  },
  mac: {
    target: ['dmg', 'zip'],
    hardenedRuntime: true,
    gatekeeperAssess: false,
    entitlements: './electron/entitlements.mac.plist',
    entitlementsInherit: './electron/entitlements.mac.plist',
    extendInfo: {
      "NSMicrophoneUsageDescription": "Mic access",
      "NSCameraUsageDescription": "Camera access"
    },
    publish: [
      {
        provider: "github",
        owner: "AgoraIO-Community",
        repo: "app-builder-core"
      }
    ]  
  },
  win: {
    target: [
      {
        target: 'nsis',
        arch: ['ia32'],
      },
    ],
  },
  afterSign: './notarize.js',
  protocols: [
    {
      name: "appbuilder",
      schemes: [
        "appbuilder"
      ]
    }
  ]
};
