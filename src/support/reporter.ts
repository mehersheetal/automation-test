import cucumberJson from 'wdio-cucumberjs-json-reporter';

// Attach a string
export function addText(value: string): void {
  cucumberJson.attach(value);
}

export function addObject<T extends object>(value: T): void {
  cucumberJson.attach(value, 'application/json');
}

export function addScreenshot(): void {
  cucumberJson.attach(browser.takeScreenshot(), 'image/png');
}

export function addImageRegScreenshot(image): void {
  cucumberJson.attach(image, 'image/png');
}

export function addTextToStep(value: string, Scenario): void {
  Scenario.attach(value);
}

export function addObjectToStep<T extends object>(value: T, Scenario): void {
  Scenario.attach(value, 'application/json');
}

export function addScreenshotToStep(Scenario): void {
  Scenario.attach(browser.takeScreenshot(), 'image/png');
}