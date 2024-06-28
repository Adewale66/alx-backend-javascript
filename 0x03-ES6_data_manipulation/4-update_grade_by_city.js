export default function updateStudentGradeByCity(students, city, grades) {
  const studentsInCity = students.filter((stu) => stu.location === city);
  return studentsInCity.map((student) => {
    const grade = grades.find((a) => a.studentId === student.id);
    return {
      ...student,
      grade: grade ? grade.grade : 'N/A',
    };
  });
}
