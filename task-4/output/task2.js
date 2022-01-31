const studentRoll = [1, 2, 3, 4, 5, 6];
const studentName = ['Student 1', 'Student 2', 'Student 3', 'Student 4', 'Student 5', 'Student 6'];
const studentPhone = ['011', '012', '013', '014', '015', '016'];

// adding new students in array arrays
studentRoll.push(7);
studentName.push('Student 7');
studentPhone.push('017');
console.log('Students Name new Array', studentName);

// update student name
const prevStudentName = 'Student 4';
const updatedName = 'Updated 4';
const indexOfUpdatedStudent = studentName.indexOf(prevStudentName);
studentName[indexOfUpdatedStudent] = updatedName;
console.log('Students Name Updated Array', studentName);

// delete students
const deletedStudentRoll = 1;
const indexOfDeletedStudent = studentRoll.indexOf(deletedStudentRoll);
studentRoll.splice(indexOfDeletedStudent, 1);
studentName.splice(indexOfDeletedStudent, 1);
studentPhone.splice(indexOfDeletedStudent, 1);

console.log('Students Name Array After Deleting', studentName);
