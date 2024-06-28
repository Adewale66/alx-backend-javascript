export default function getStudentIdsSum(students) {
  return students.reduce((a, b) => a + b.id, 0);
}
