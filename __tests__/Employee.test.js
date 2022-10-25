const Employee = require(`../lib/Employee`);

describe(`Employee`, () => {
  it(`should create a new object of Employee`, () => {
    const obj = new Employee();
    expect(typeof obj).toBe(`object`);
  });
  it(`should return the name from the Employee object`, () => {
    const name = `Bob`;
    const obj = new Employee(name);
    expect(obj.name).toBe(name);
  });
  it(`should return the email from the Employee object`, () => {
    const email = `bob@bob.com`;
    const obj = new Employee(email);
    expect(obj.email).toBe(email);
  });
  it(`should return the id from the Employee object`, () => {
    const id = `8`;
    const obj = new Employee(id);
    expect(obj.id).toBe(id);
  });
});
