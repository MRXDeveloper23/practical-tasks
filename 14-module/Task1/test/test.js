const homePage = require("../../pageObjects/homePage");

describe("Paste 1 test", () => {
  it("Paste text in textarea", () => {
    homePage.pasteText("Hello from webdriver");
  });
  it("Set paste expiration", () => {
    homePage.pasteExpiration();
  });
  it("Set paste title", () => {
    homePage.setPasteTitle("helloweb");
  });
});
