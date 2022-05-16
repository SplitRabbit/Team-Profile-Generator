const Employee= require('../lib/Employee.js');

test('creates a new employee', () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
  });

test('Set Employee Name', () => {
    const name = "Jeffrey"
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
});
test('Set ID', () => {
    const testId = 100;
    const employee = new Employee("Jeffrey", testId);
    expect(employee.id).toBe(testId);
});
test('Set Role', () => {
    const testRole = "Manager"
    const employee = new Employee("Jeffrey", 1, testRole);
    expect(employee.role).toBe(testRole);
});
test('Set Email', () => {
    const testEmail = "grant@cheese.com"
    const employee = new Employee("Jeffrey", 1, "Manager",testEmail);
    expect(employee.email).toBe(testEmail);
});
test('get name from getName', () => {
    const testName = "Jeffrey"
    const employee = new Employee(testName);
    expect(employee.getName()).toBe(testName);
});
test('get ID from getId', () => {
    const testId = "100"
    const employee = new Employee("Grant", testId);
    expect(employee.getId()).toBe(testId);
});
test('getRole function', () => {
    const testRole = "Manager"
    const employee = new Employee("Grant", 1, "Manager");
    expect(employee.getRole()).toBe(testRole);
});
test('get email from getEmail', () => {
    const testEmail = "grant@cheese.com"
    const employee = new Employee("Grant", 1,'Employee', testEmail);
    expect(employee.getEmail()).toBe(testEmail);
});
