const {
  Builder,
  By,
  Key,
  until,
} = require("selenium-webdriver");
const driver = new Builder().forBrowser("firefox").build();

class HomePage {
  constructor() {
    driver.get("http://www.pastebin.com");
  }
  pasteText(text) {
    driver
      .findElement(By.id("postform-text"))
      .sendKeys(text);
  }
  pasteExpiration() {
    driver.executeScript(
      "let expiration = document.getElementById('select2-postform-expiration-container');" +
        "expiration.title='10 Minutes';" +
        "expiration.textContent='10 Minutes';"
    );
  }
  setPasteTitle(title) {
    driver
      .findElement(By.id("postform-name"))
      .sendKeys(title);
    // driver.quit();
  }
}

module.exports = new HomePage();
