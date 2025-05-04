exports.config = {
  runner: 'local',
  specs: [
    './test/specs/openApp.test.js',
    './test/specs/navigateToLogin.test.js'
  ],
  exclude: [],
  maxInstances: 1,

  hostname: 'localhost',
  port: 4723,
  path: '/wd/hub',

  capabilities: [{
    platformName: 'Android',
    'appium:deviceName': 'R5CX30H2V2N', 
    'appium:platformVersion': '15',
    'appium:automationName': 'UiAutomator2',
    'appium:appPackage': 'com.tandemdiabetes.tconnect',
    'appium:appActivity': 'com.tandemdiabetes.tconnect.OnboardingActivity',
    'appium:noReset': true,
    'appium:autoLaunch': true
  }],
  
  logLevel: 'info',
  bail: 0,
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,

  framework: 'mocha',
  reporters: ['spec'],

  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  }
};
