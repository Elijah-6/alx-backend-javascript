export default function createIteratorObject(report) {
  const allEmployees = Object.values(report.allEmployees).flat();
  let index = 0;

  return {
    next() {
      if (index < allEmployees.length) {
        return { value: allEmployees[index + 1], done: false };
      }
      return { done: true };
    },
    [Symbol.iterator]() {
      return this;
    }
  };
}
