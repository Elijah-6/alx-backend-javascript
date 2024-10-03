export default class HolbertonCourse {
  constructor(name, length, students = [],) {
    if (typeof name !== 'string' || name.length === 0) {
      throw new TypeError('Name must be a non-empty string');
    }
    if (typeof length!== 'number' || length <= 0) {
      throw new TypeError('Length must be a number');
    }
    if (!Array.isArray(students) || students.length === 0) {
      throw new Error('Students must be an array with at least one student');
    }
    if (students.some((student) => typeof student !== 'string')) {
      throw new Error('Students array must only contain strings');
    }

    this._name = name;
    this._length = length;
    this._students = students;
  }
}
