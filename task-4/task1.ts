// remove comma from strings

const arr: string[] = ['b', 'ang', 'la', 'des', 'h'];
const str: string = arr.join();
const withoutComma: string = str.split(',').join('');

console.log(withoutComma);
