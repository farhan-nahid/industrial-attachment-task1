const num = 5;

for (let i = 1; i <= num; i++) {
  var space = ' ';
  var star = '';
  for (var j = 1; j < (num - i) * 2; j++) {
    space += ' ';
  }
  for (let k = 0; k < i; k++) {
    star += '* ';
  }
  process.stdout.write(space);
  console.log(star);
}
