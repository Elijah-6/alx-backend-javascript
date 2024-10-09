/**
 * Interface representing a Teacher.
 * 
 * @property {string} firstName - The first name of the teacher. This property is read-only.
 * @property {string} lastName - The last name of the teacher. This property is read-only.
 * @property {boolean} fullTimeEmployee - Indicates if the teacher is a full-time employee.
 * @property {number} [yearsOfExperience] - The number of years the teacher has been teaching. This property is optional.
 * @property {string} location - The location where the teacher is based.
 * @property {any} [key: string] - Additional properties can be added with any key and value.
 */
export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

/**
 * Interface representing a Director.
 * 
 * @extends {Teacher}
 * @property {number} numberOfReports - The number of reports the director is responsible for.
 */
export interface Directors extends Teacher {
  numberOfReports: number;
}

/**
 * Interface representing the printTeacher function.
 * 
 * @param {string} firstName - The first name of the teacher.
 * @param {string} lastName - The last name of the teacher.
 * @returns {string} - The formatted name.
 */
export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

/**
 * Function to print the teacher's name.
 * 
 * @param {string} firstName - The first name of the teacher.
 * @param {string} lastName - The last name of the teacher.
 * @returns {string} - The formatted name.
 */
export const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

/**
 * Interface representing the constructor of the StudentClass.
 * 
 * @param {string} firstName - The first name of the student.
 * @param {string} lastName - The last name of the student.
 */
export interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

/**
 * Interface representing the StudentClass.
 * 
 * @property {string} firstName - The first name of the student.
 * @property {string} lastName - The last name of the student.
 * @method workOnHomework - Method that returns a string indicating the student is working on homework.
 * @method displayName - Method that returns the first name of the student.
 */
export interface StudentClassInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

/**
 * Class representing a student.
 * 
 * @implements {StudentClassInterface}
 */
export class StudentClass implements StudentClassInterface {
  constructor(public firstName: string, public lastName: string) {}

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}
