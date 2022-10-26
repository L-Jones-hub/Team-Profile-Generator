const Intern = require(`../lib/Intern`);

describe(`Intern`, () => {
  it("should relate to the school property of the object created", () => {
    const testedElement = new Intern("Jacob", 9, "jacob@jacob.com", "UT");
    expect(testedElement.school).toBe("UT");
  });

  it("should return Intern when I invoke getRole()", () => {
    const testedElement = new Intern();
    expect(testedElement.getPosition()).toBe("Intern");
  });
});
