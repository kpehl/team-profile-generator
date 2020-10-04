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