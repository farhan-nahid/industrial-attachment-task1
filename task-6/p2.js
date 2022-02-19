const students = [];
const st1 = { key: '01', name: 'student1', m1: 10, m2: 30, m3: 40, m4: 50, m5: 60 };
const st2 = { key: '02', name: 'student2', m1: 20, m2: 40, m3: 40, m4: 50, m5: 60 };
const st3 = { key: '03', name: 'student3', m1: 30, m2: 50, m3: 40, m4: 50, m5: 60 };
const st4 = { key: '04', name: 'student4', m1: 90, m2: 60, m3: 70, m4: 80, m5: 86 };
const st5 = { key: '05', name: 'student5', m1: 50, m2: 60, m3: 40, m4: 50, m5: 60 };
const st6 = { key: '06', name: 'student6', m1: 60, m2: 80, m3: 40, m4: 50, m5: 60 };
const st7 = { key: '07', name: 'student7', m1: 70, m2: 70, m3: 40, m4: 50, m5: 60 };
const st8 = { key: '08', name: 'student8', m1: 80, m2: 52, m3: 40, m4: 50, m5: 60 };
const st9 = { key: '09', name: 'student9', m1: 90, m2: 36, m3: 40, m4: 50, m5: 60 };
const st0 = { key: '10', name: 'student0', m1: 80, m2: 90, m3: 40, m4: 50, m5: 60 };

students.push(st1, st2, st3, st4, st5, st6, st7, st8, st9, st0);

const gradeCalc = (mark) => {
  if (mark >= 80) {
    return 5;
  } else if (mark >= 70 && mark < 80) {
    return 4;
  } else if (mark >= 60 && mark < 70) {
    return 3.5;
  } else if (mark >= 50 && mark < 60) {
    return 3;
  } else if (mark >= 40 && mark < 50) {
    return 2.5;
  } else if (mark >= 33 && mark < 40) {
    return 2;
  }
};

const aPlus = [];
const aMinus = [];
const a = [];
const b = [];
const c = [];
const d = [];
for (const student of students) {
  if (student.m1 < 33 || student.m2 < 33 || student.m3 < 33 || student.m4 < 33 || student.m5 < 33) {
    console.log(`${student.name} is Deleted`);
  } else {
    const bangla = gradeCalc(student.m1);
    const math = gradeCalc(student.m2);
    const english = gradeCalc(student.m3);
    const religious = gradeCalc(student.m4);
    const science = gradeCalc(student.m5);
    const total = bangla + math + english + religious + science;
    if (total / 5 === 5) {
      console.log(student.name);
      aPlus.push(student.name);
    } else if (total / 5 >= 4) {
      a.push(student.name);
    } else if (total / 5 >= 3.5) {
      aMinus.push(student.name);
    } else if (total / 5 >= 3) {
      b.push(student.name);
    } else if (total / 5 >= 2.5) {
      c.push(student.name);
    } else {
      d.push(student.name);
    }
  }
}

console.log(`A+ = ${aPlus.toString()}`);
console.log(`A = ${a.toString()}`);
console.log(`A- = ${aMinus.toString()}`);
console.log(`B = ${b.toString()}`);
console.log(`C = ${c.toString()}`);
console.log(`D = ${d.toString()}`);
