const Manager = require(`../lib/Manager`);

describe(`Manager`, () => {
  it(`should create a new object of Manager`, () => {
    const obj = new Manager();
    expect(typeof obj).toBe(`object`);
  });
  it(`should return the name from the Manager object`, () => {
    const name = `Beth`;
    const obj = new Manager(name);
    expect(obj.name).toBe(name);
  });
  it(`should return the email from the Manager object`, () => {
    const email = `beth@beth.com`;
    const obj = new Manager(email);
    expect(obj.email).toBe(email);
  });
  it(`should return the id from the Manager object`, () => {
    const id = `5`;
    const obj = new Manager(id);
    expect(obj.id).toBe(id);
  });
  it(`should return the office number from the Manager object`, () => {
    const officeNumber = `236`;
    const obj = new Manager(officeNumber);
    expect(obj.officeNumber).toBe(officeNumber);
  });
});
