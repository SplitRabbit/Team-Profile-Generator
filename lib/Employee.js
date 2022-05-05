class Employee {
    constructor(name,id,role,email) {
    this.id = id;
    this.role = role;
    this.name = name;
    this.email = email;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return this.role;
    }
};

module.exports = Employee;