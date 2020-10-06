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

test("get manager's name", () => {
    const manager = new Manager('Rob', '311', 'rob@something.com', 'B1');

    expect(manager.getName()).toBe('Rob');
})

test("get manager's id", () => {
    const manager = new Manager('Rob', '311', 'rob@something.com', 'B1');

    expect(manager.getId()).toBe('311');
})

test("get manager's email", () => {
    const manager = new Manager('Rob', '311', 'rob@something.com', 'B1');

    expect(manager.getEmail()).toBe('rob@something.com');
})

test("get manager's role", () => {
    const manager = new Manager('Rob', '311', 'rob@something.com', 'B1');

    expect(manager.getRole()).toBe('Manager');
})

test("get manager's office", () => {
    const manager = new Manager('Rob', '311', 'rob@something.com', 'B1');

    expect(manager.getOffice()).toBe('B1');
})