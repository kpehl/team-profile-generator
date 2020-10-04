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