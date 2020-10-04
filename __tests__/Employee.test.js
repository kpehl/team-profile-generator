const { TestScheduler } = require('jest')
const Employee = require('../lib/Employee')

test('create an employee class', () => {
    const employee = new Employee('Joe', '213', 'joe@somewhere.com');

    expect(employee.name).toBe('Joe');
    expect(employee.id).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.role).toEqual('Employee')
});

