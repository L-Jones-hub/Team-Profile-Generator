const Manager = require(`../lib/Manager`);

describe(`Manager`, () => {
  it("should relate to the office number property of the object created", () => {
    const testedElement = new Manager("Beth", 5, "beth@beth.com", 236);
    expect(testedElement.officeNumber).toBe(236);
  });

  it("should return Manager when I invoke getRole()", () => {
    const testedElement = new Manager();
    expect(testedElement.getPosition()).toBe("Manager");
  });
});
