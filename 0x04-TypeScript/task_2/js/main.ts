/**
 * Interface representing a Director.
 */
interface DirectorInterface {
    /**
     * Method to simulate working from home.
     * @returns A string indicating working from home.
     */
    workFromHome(): string;

    /**
     * Method to simulate getting a coffee break.
     * @returns A string indicating getting a coffee break.
     */
    getCoffeeBreak(): string;

    /**
     * Method to simulate performing director tasks.
     * @returns A string indicating performing director tasks.
     */
    workDirectorTasks(): string;
}

/**
 * Interface representing a Teacher.
 */
interface TeacherInterface {
    /**
     * Method to simulate working from home.
     * @returns A string indicating working from home.
     */
    workFromHome(): string;

    /**
     * Method to simulate getting a coffee break.
     * @returns A string indicating getting a coffee break.
     */
    getCoffeeBreak(): string;

    /**
     * Method to simulate performing teacher tasks.
     * @returns A string indicating performing teacher tasks.
     */
    workTeacherTasks(): string;
}

/**
 * Class representing a Director.
 * Implements the DirectorInterface.
 */
class Director implements DirectorInterface {
    workFromHome(): string {
        return "Working from home";
    }

    getCoffeeBreak(): string {
        return "Getting a coffee break";
    }

    workDirectorTasks(): string {
        return "Getting to director tasks";
    }
}

/**
 * Class representing a Teacher.
 * Implements the TeacherInterface.
 */
class Teacher implements TeacherInterface {
    workFromHome(): string {
        return "Cannot work from home";
    }

    getCoffeeBreak(): string {
        return "Cannot have a break";
    }

    workTeacherTasks(): string {
        return "Getting to work";
    }
}

/**
 * Function to create an employee based on the provided salary.
 * @param salary - The salary of the employee, can be a number or a string.
 * @returns An instance of Director or Teacher based on the salary.
 */
function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher();
    } else {
        return new Director();
    }
}

/**
 * Type guard function to check if an employee is a Director.
 * @param employee - The employee to check.
 * @returns True if the employee is a Director, false otherwise.
 */
function isDirector(employee: Director | Teacher): employee is Director {
    return (employee as Director).workDirectorTasks !== undefined;
}

/**
 * Function to execute work based on the type of employee.
 * @param employee - The employee whose work is to be executed.
 * @returns A string indicating the work being performed.
 */
function executeWork(employee: Director | Teacher): string {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    } else {
        return employee.workTeacherTasks();
    }
}

/**
 * Type representing the subjects that can be taught.
 */
type Subjects = "Math" | "History";

/**
 * Function to simulate teaching a class based on the subject.
 * @param todayClass - The subject being taught.
 * @returns A string indicating the subject being taught.
 */
function teachClass(todayClass: Subjects): string {
    if (todayClass === "Math") {
        return "Teaching Math";
    } else {
        return "Teaching History";
    }
}
