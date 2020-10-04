const { TestScheduler } = require('jest');
const Manager = require('../lib/Manager');

test('creates a manager class', () => {
    const manager = new Manager('Rob', '311', 'rob@something.com', 'B1');

    expect(manager.name).toBe('Rob')
    expect(manager.id).toEqual(expect.any(String));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.role).toEqual('Manager')
    expect(manager.officeNumber).toEqual(expect.any(String))

    // console.log(manager)
});