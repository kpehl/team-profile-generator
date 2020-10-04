// An Employee super contstructor class
class Employee {
    // Employee Constructor
    constructor(name = '', id = 0, email = '') {
        // Employee Name
        this.name = name;
        // Employee ID
        this.id = id;
        // Employee E-Mail Address
        this.email = email;
        // Employee Role
        this.role = 'Employee';
    }

    // Employee Methods
    // Get Name
    getName() {
        return `${this.name}`;
    }
    // Get ID
    getId() {
        return `ID: ${this.id}`;
    }
    // Get Email
    getEmail() {
        return `Email: \n ${this.email}`;
    }
    // Get Role
    getRole() {
        return `${this.role}`;
    }
}

// Export the Employee class
module.exports = Employee;