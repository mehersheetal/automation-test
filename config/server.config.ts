export const serverConfig = {
  // =====================
  // Server Configurations
  // =====================
  // Host address of the running Selenium server. This information is usually obsolete as
  // WebdriverIO automatically connects to localhost. Also, if you are using one of the
  // supported cloud services like Sauce Labs, Browserstack, Testing Bot or LambdaTest you don't
  // need to define host and port information because WebdriverIO can figure that out
  // according to your user and key information. However, if you are using a private Selenium
  // backend you should define the host address, port, and path here.
  //
  hostname: process.env.SE_EVENT_BUS_HOST || 'localhost',
  port: parseInt(process.env.SE_EVENT_BUS_PORT, 10) || 4444,
};