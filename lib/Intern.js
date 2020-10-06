// Dependencies
const Employee = require('./Employee');

// Intern Class
class Intern extends Employee {
    constructor(name = '', id = 0, email = '', school = '') {
        // Intern Name, ID, Email
        super(name, id, email);
        // Intern School Username
        this.school = school;
        // Intern Role
        this.role = 'Intern';
    }

    // Methods for Intern
    // Get Role
    getRole() {
        return `${this.role}`;
    }
    // Get School
    getSchool() {
        return `${this.school}`;
    }
}

// Export the Intern class
module.exports = Intern;