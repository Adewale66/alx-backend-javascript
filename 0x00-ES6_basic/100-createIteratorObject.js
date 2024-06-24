export default function createIteratorObject(report) {
  return {
    [Symbol.iterator]() {
      const departments = Object.keys(report.allEmp);
      let currentDepartmentIndex = 0;
      let currentEmployeeIndex = 0;
      return {
        next() {
          const employees = report.allEmp[departments[currentDepartmentIndex]];
          if (currentEmployeeIndex >= employees.length) {
            currentDepartmentIndex += 1;
            currentEmployeeIndex = 0;
          }
          if (currentDepartmentIndex >= departments.length) {
            return { done: true };
          }
          return {
            value: employees[currentEmployeeIndex++],
            done: false,
          };
        },
      };
    },
  };
}
