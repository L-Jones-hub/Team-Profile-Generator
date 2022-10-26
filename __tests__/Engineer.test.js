const Engineer = require(`../lib/Engineer`);

describe(`Engineer`, () => {
  it("should relate to the github property of the object created", () => {
    const testedElement = new Engineer("Sara", 5, "sara@sara.com", "fakeuser");
    expect(testedElement.github).toBe("fakeuser");
  });

  it("Should return Engineer when I invoke getRole()", () => {
    const testedElement = new Engineer();
    expect(testedElement.getPosition()).toBe("Engineer");
  });
});
