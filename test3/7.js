/**
Multi Dimensional XO
====================
Implementasikan function `multiDimensionalXO` untuk membuat
array `size` x `size`. Array akan diisi dengan huruf 'x' atau huruf 'o'.
# Contoh I/O
- Input: 3
  Output: [ [ 'o', 'x', 'o' ], [ 'x', 'o', 'x' ], [ 'o', 'x', 'o' ] ]
Pastikan kamu mengisi selang-seling, lihatlah pattern dari output di test case!

# Kondisi khusus
- Jika `size` lebih kecil dari 1, tampilkan 'Invalid input'

*/

function multiDimensionalXO(size) {
  let result = [];
  let num = 0;
  for (let i = 0; i < size; i++) {
    let ara = [];
    for (let j = 0; j < size; j++) {
      if (num % 2 !== 0) {
        ara.push("x");
      } else {
        ara.push("o");
      }
      num++;
    }
    result.push(ara);
  }
  if (size < 1) {
    return "invalid Input";
  }
  return result;
}
console.log(multiDimensionalXO(3));
// [ [ 'o', 'x', 'o' ],
// [ 'x', 'o', 'x' ],
// [ 'o', 'x', 'o' ] ]

console.log(multiDimensionalXO(5));
/*
[ [ 'o', 'x', 'o', 'x', 'o' ],
  [ 'x', 'o', 'x', 'o', 'x' ],
  [ 'o', 'x', 'o', 'x', 'o' ],
  [ 'x', 'o', 'x', 'o', 'x' ],
  [ 'o', 'x', 'o', 'x', 'o' ] ]
*/

console.log(multiDimensionalXO(6));
/*
[ [ 'o', 'x', 'o', 'x', 'o', 'x' ],
  [ 'o', 'x', 'o', 'x', 'o', 'x' ],
  [ 'o', 'x', 'o', 'x', 'o', 'x' ],
  [ 'o', 'x', 'o', 'x', 'o', 'x' ],
  [ 'o', 'x', 'o', 'x', 'o', 'x' ],
  [ 'o', 'x', 'o', 'x', 'o', 'x' ] ]
*/

console.log(multiDimensionalXO(0));
// Invalid input