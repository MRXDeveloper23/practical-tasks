const home = require("../pageObjects/home");
const code = `git config --global user.name "New Sheriff in Town"\ngit reset $ (git commit-tree HEAD ^ {tree} -m "Legacy code")\ngit push origin master --force\n`;

describe("Checking paste", () => {
  try {
    it("check the code entered", () => {
      home.pasteText(code);
    });
    it("check syntax highlighting", () => {
      home.setSyntax();
    });

    it("check expiration", () => {
      home.pasteExpiration();
    });
    it("check title", () => {
      home.setPasteTitle(
        "how to gain dominance among developers"
      );
    });
    it("turn on syntax highlighting", () => {
      home.turnOnHighlight();
    });
  } catch (err) {
    console.log(err);
  }
});
