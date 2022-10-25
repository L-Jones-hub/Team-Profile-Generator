const Engineer = require(`../lib/Engineer`);

describe(`Engineer`, () => {
  it(`should create a new object of Engineer`, () => {
    const obj = new Engineer();
    expect(typeof obj).toBe(`object`);
  });
  it(`should return the name from the Engineer object`, () => {
    const name = `Sara`;
    const obj = new Engineer(name);
    expect(obj.name).toBe(name);
  });
  it(`should return the email from the Engineer object`, () => {
    const email = `sara@sara.com`;
    const obj = new Engineer(email);
    expect(obj.email).toBe(email);
  });
  it(`should return the id from the Engineer object`, () => {
    const id = `5`;
    const obj = new Engineer(id);
    expect(obj.id).toBe(id);
  });
  it(`should return the GitHub from the Engineer object`, () => {
    const github = `codingsara`;
    const obj = new Engineer(github);
    expect(obj.github).toBe(github);
  });
});
