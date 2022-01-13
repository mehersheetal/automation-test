import { join } from "path";
export const serviceConfig = {
  // Test runner services
  // Services take over a specific job you don't want to take care of. They enhance
  // your test setup with almost no effort. Unlike plugins, they don't add new
  // commands. Instead, they hook themselves up into the test process.
  services: [
    [
      "image-comparison",
      {
        baselineFolder: join(
          process.cwd(),
          "./image-comparison/baseline/"
        ),
        formatImageName: "{tag}-{logName}-{width}x{height}",
        screenshotPath: join(
          process.cwd(),
          "./image-comparison/screenshots/"
        ),
        savePerInstance: true,
        autoSaveBaseline: true,
        blockOutStatusBar: true,
        blockOutToolBar: true,
        returnAllCompareData: true,
        isHybridApp: false,
        // Options for the tabbing image
        tabbableOptions: {
          circle: {
            size: 18,
            fontSize: 18,
          },
          line: {
            color: "#ff221a",// hex-code or for example words like `red|black|green`
            width: 3,
          },
        },
      },
    ],
  ],
};
