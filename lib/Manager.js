// Dependencies
const Employee = require('./Employee');

// Manager Class
class Manager extends Employee {
    constructor(name = '', id = 0, email = '', officeNumber = '') {
        // Manager Name
        super(name, id, email);
        // Manager Office Number
        this.officeNumber = officeNumber;
        // Manager Role
        this.role = 'Manager';
    }

    // Methods for Manager
    // Get Role
    getRole() {
        return `${this.role}`;
    }
}

// Export the Manager class
module.exports = Manager;