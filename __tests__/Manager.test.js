const Manager = require('../lib/Manager.js');

test('Create an Manager', () => {
    const manager = new Manager();
    expect(typeof(manager)).toBe("object");
});

test('getRole function', () => {
    const testRole = 'Manager';
    const employee = new Manager('Jeffrey',1,"test@gmail.com");
    expect(employee.getRole()).toBe(testRole);
});

test('Get School', () => {
    const testOfficenumber = '10';
    const employee = new Manager('Jeffrey',1,"test@gmail.com",testOfficenumber);
    expect(employee.getOfficenumber()).toBe(testOfficenumber);
});