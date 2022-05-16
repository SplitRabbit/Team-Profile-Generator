const Engineer = require('../lib/Engineer.js');

test('Create an Engineer', () => {
    const engineer = new Engineer();
    expect(typeof(engineer)).toBe("object");
});

test('getRole function', () => {
    const testRole = 'Engineer';
    const employee = new Engineer('Jeffrey',1,"test@gmail.com");
    expect(employee.getRole()).toBe(testRole);
});

test('Get Github', () => {
    const testGit = 'SplitRabbit';
    const employee = new Engineer('Jeffrey',1,"test@gmail.com",testGit);
    expect(employee.getGithub()).toBe(testGit);
});