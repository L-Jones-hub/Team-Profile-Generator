const Employee = require(`../lib/Employee`);

describe(`Employee`, () => {
  it("Should be a typeof 'object' whenever I initialize it", () => {
    const testedElement = new Employee();
    expect(typeof testedElement).toBe("object");
  });
  it("When I pass the first parameter through the Employee class, it should relate to the name property of the object created", () => {
    const testedElement = new Employee("Bob");
    expect(testedElement.name).toBe("Bob");
  });
  it("When I pass the second parameter through the Employee class, it should relate to the id property of the object created", () => {
    const testedElement = new Employee("Bob", 8);
    expect(testedElement.id).toBe(8);
  });
  it("When I pass the third parameter through the Employee class, it should relate to the email property of the object created", () => {
    const testedElement = new Employee("Bob", 8, "bob@bob.com");
    expect(testedElement.email).toBe("bob@bob.com");
  });
});
