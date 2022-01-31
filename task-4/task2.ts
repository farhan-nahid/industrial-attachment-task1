/* 


Write a code for the following story.
An institution has some students.
[Based on previous class]
Each student has roll, name & phone number.
Now, they want a program, which will have
The functionality of add, delete, update students.


*/

const studentRoll: number[] = [1, 2, 3, 4, 5, 6];
const studentName: string[] = ['Student 1', 'Student 2', 'Student 3', 'Student 4', 'Student 5', 'Student 6'];
const studentPhone: string[] = ['011', '012', '013', '014', '015', '016'];

// new students

const newStudentRoll: number = 7;
const newStudentName: string = 'Student 7';
const newStudentPhone: string = '017';

// adding new students in array arrays

studentRoll.push(newStudentRoll);
studentName.push(newStudentName);
studentPhone.push(newStudentPhone);

console.log(`You added Roll: ${newStudentRoll}\t ${newStudentName}\t ${newStudentPhone}\t in our array`);
console.log('Students Name New Array', studentName);

// update students

const prevStudentName: string = 'Student 4';
const updatedName: string = 'Updated 4';
const indexOfUpdatedStudent: number = studentName.indexOf(prevStudentName);
studentName[indexOfUpdatedStudent] = updatedName;
console.log(`Your Updated ${prevStudentName}\t name to ${updatedName}`);
console.log('Students Name Updated Array', studentName);

// delete students

const deletedStudentRoll: number = 1;
const indexOfDeletedStudent: number = studentRoll.indexOf(deletedStudentRoll);
studentRoll.splice(indexOfDeletedStudent, 1);
studentName.splice(indexOfDeletedStudent, 1);
studentPhone.splice(indexOfDeletedStudent, 1);
console.log(
  `You Deleted Roll: ${studentRoll[indexOfDeletedStudent]}\t name: ${studentName[indexOfDeletedStudent]}\t phone: ${studentPhone[indexOfDeletedStudent]}`
);

console.log('Students Name Array After Deleting', studentName);
