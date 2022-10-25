const Intern = require(`../lib/Intern`);

describe(`Intern`, () => {
  it(`should create a new object of Intern`, () => {
    const obj = new Intern();
    expect(typeof obj).toBe(`object`);
  });
  it(`should return the name from the Intern object`, () => {
    const name = `Jacob`;
    const obj = new Intern(name);
    expect(obj.name).toBe(name);
  });
  it(`should return the email from the Intern object`, () => {
    const email = `jacob@jacob.com`;
    const obj = new Intern(email);
    expect(obj.email).toBe(email);
  });
  it(`should return the id from the Intern object`, () => {
    const id = `9`;
    const obj = new Intern(id);
    expect(obj.id).toBe(id);
  });
  it(`should return the school from the Intern object`, () => {
    const school = `UT Austin`;
    const obj = new Intern(school);
    expect(obj.school).toBe(school);
  });
});
