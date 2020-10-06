const { TestScheduler } = require('jest');
const Engineer = require('../lib/Engineer');

test('creates an engineer class', () => {
    const engineer = new Engineer('Code Monkey', '678', 'codem@something.com', 'code-monkey');

    expect(engineer.name).toBe('Code Monkey')
    expect(engineer.id).toEqual(expect.any(String));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.role).toEqual('Engineer')
    expect(engineer.github).toEqual(expect.any(String))

    // console.log(engineer)
});

test("get engineer's name", () => {
    const engineer = new Engineer('Code Monkey', '678', 'codem@something.com', 'code-monkey');

    expect(engineer.getName()).toBe('Code Monkey');
})

test("get engineer's id", () => {
    const engineer = new Engineer('Code Monkey', '678', 'codem@something.com', 'code-monkey');

    expect(engineer.getId()).toBe('678');
})

test("get engineer's email", () => {
    const engineer = new Engineer('Code Monkey', '678', 'codem@something.com', 'code-monkey');

    expect(engineer.getEmail()).toBe('codem@something.com');
})

test("get engineer's role", () => {
    const engineer = new Engineer('Code Monkey', '678', 'codem@something.com', 'code-monkey');

    expect(engineer.getRole()).toBe('Engineer');
})

test("get engineer's github user name", () => {
    const engineer = new Engineer('Code Monkey', '678', 'codem@something.com', 'code-monkey');

    expect(engineer.getGitHub()).toBe('code-monkey');
})