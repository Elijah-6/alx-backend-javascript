export default function createIteratorObject(report) {
  return (function* _() {
    for (const employees of Object.values(report.allEmployees)) {
      for (const employee of employees) {
        yield employee;
      }
    }
  }());
}
