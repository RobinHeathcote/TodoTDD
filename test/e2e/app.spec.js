describe("app", function() {
  it("should get home page title", function() {
    browser.get('/');
    expect($$("p").first().getText()).toEqual("Hello world");
  });
});
