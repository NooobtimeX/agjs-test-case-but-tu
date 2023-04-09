exports.config = {
  capabilities: {
    browserName: "chrome",
  },
  seleniumAddress: "http://localhost:4444/wd/hub",
  framework: "jasmine",
  specs: ["spec.js"],
  jasmineNodeOpts: {
    defaultTimeoutInterval: 20000,
  },
};
