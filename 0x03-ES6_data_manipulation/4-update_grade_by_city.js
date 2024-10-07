export default function updateStudentsGradeByCity(students, city, newGrade) {
  return students.filter((student) => student.location === city).map((student) => {
    const grade = newGrade.filter((newGrade) => newGrade.studentId === student.id);
    return {
      ...student,
      grade: grade.length > 0 ? grade[0].grade : 'N/A',
    };
  });
}
