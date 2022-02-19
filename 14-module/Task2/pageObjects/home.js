const {
  Builder,
  By,
  Key,
  until,
} = require("selenium-webdriver");
const driver = new Builder().forBrowser("firefox").build();

class Home {
  constructor() {
    driver.get("http://pastebin.com");
  }
  pasteText(code) {
    driver
      .findElement(By.id("postform-text"))
      .sendKeys(code);
  }
  turnOnHighlight() {
    driver.executeScript(
      "document.getElementById('paste-raw-on').checked=true;"
    );
  }
  setSyntax() {
    driver.executeScript(
      `let syntaxHighlight = document.getElementById('select2-postform-format-container'); syntaxHighlight.title='Bash';
      syntaxHighlight.textContent='Bash'`
    );
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

module.exports = new Home();
