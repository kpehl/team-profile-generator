// Dependencies
const Employee = require('./Employee');

// Engineer Class
class Engineer extends Employee {
    constructor(name = '', id = 0, email = '', github = '') {
        // Engineer Name, ID, Email
        super(name, id, email);
        // Engineer GitHub Username
        this.github = github;
        // Engineer Role
        this.role = 'Engineer';
    }

    // Methods for Engineer
    // Get Role
    getRole() {
        return `${this.role}`;
    }
    // Get GitHub
    getGitHub() {
        return `${this.github}`;
    }
}

// Export the Engineer class
module.exports = Engineer;