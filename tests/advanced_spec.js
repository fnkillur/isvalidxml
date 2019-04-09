// TODO: Add tests that you find necessary.

const { isValidXML } = require("../src");

describe("advanced validator test", () => {
  it("should return true for an xml", () => {
    expect(isValidXML("<a></a><b><c /><d></d></b>")).toBeTruthy();
  });

  it("should return true for an xml", () => {
    expect(isValidXML("<a>></a><b></b>")).toBeTruthy();
  });

  it("should return true for an xml", () => {
    expect(isValidXML("<a></a><b><c /><d></d></b><a>></a><b></b><a><b></b></a>")).toBeTruthy();
  });

  it("should return false for an xml", () => {
    expect(isValidXML("<a><a/></a>")).toBeFalsy();
  });
});
