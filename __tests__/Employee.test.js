const { TestScheduler } = require('jest')
const Employee = require('../lib/Employee')

test('create an employee class', () => {
    const employee = new Employee('Joe', '213', 'joe@somewhere.com');

    expect(employee.name).toBe('Joe');
    expect(employee.id).toEqual(expect.any(String));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.role).toEqual('Employee')

    // console.log(employee)
});

test('get employee name', () => {
    const employee = new Employee('Joe', '213', 'joe@somewhere.com');

    expect(employee.getName()).toBe('Joe');
})

test('get employee id', () => {
    const employee = new Employee('Joe', '213', 'joe@somewhere.com');

    expect(employee.getId()).toBe('213');
})

test('get employee email', () => {
    const employee = new Employee('Joe', '213', 'joe@somewhere.com');

    expect(employee.getEmail()).toBe('joe@somewhere.com');
})