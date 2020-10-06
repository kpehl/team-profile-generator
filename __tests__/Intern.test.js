const { TestScheduler } = require('jest');
const Intern = require('../lib/Intern');

test('creates an intern class', () => {
    const intern = new Intern('Suzy', '998', 'suzy@someschool.edu', 'Some School U');

    expect(intern.name).toBe('Suzy')
    expect(intern.id).toEqual(expect.any(String));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.role).toEqual('Intern')
    expect(intern.school).toEqual(expect.any(String))

    // console.log(intern)
});

test("get intern's name", () => {
    const intern = new Intern('Suzy', '998', 'suzy@someschool.edu', 'Some School U');

    expect(intern.getName()).toBe('Suzy');
})

test("get intern's id", () => {
    const intern = new Intern('Suzy', '998', 'suzy@someschool.edu', 'Some School U');

    expect(intern.getId()).toBe('998');
})

test("get intern's email", () => {
    const intern = new Intern('Suzy', '998', 'suzy@someschool.edu', 'Some School U');

    expect(intern.getEmail()).toBe('suzy@someschool.edu');
})

test("get intern's role", () => {
    const intern = new Intern('Suzy', '998', 'suzy@someschool.edu', 'Some School U');

    expect(intern.getRole()).toBe('Intern');
})

test("get intern's school", () => {
    const intern = new Intern('Suzy', '998', 'suzy@someschool.edu', 'Some School U');

    expect(intern.getSchool()).toBe('Some School U');
})