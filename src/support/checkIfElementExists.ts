import { expect } from "chai";

export function checkIfElementExists(selector: string): void {
  const numOfElements = $$(selector);
  expect(numOfElements).to.have.length.of.at.least(
    1,
    `Element with selector "${selector}" should exist on the page`
  );
}
