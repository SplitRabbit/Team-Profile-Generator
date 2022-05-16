const Intern = require('../lib/Intern.js');

test('Create an Intern', () => {
    const intern = new Intern();
    expect(typeof(intern)).toBe("object");
});

test('getRole function', () => {
    const testRole = 'Intern';
    const employee = new Intern('Jeffrey',1,"test@gmail.com");
    expect(employee.getRole()).toBe(testRole);
});

test('Get School', () => {
    const testSchool = 'University';
    const employee = new Intern('Jeffrey',1,"test@gmail.com",testSchool);
    expect(employee.getSchool()).toBe(testSchool);
});