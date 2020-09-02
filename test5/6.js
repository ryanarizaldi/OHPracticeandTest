/*
===========================
Initial Grouping Descending
==========================

[INSTRUCTION]
Disediakan sebuah function initialGroupingDescending yang bertugas untuk menerima sebuah parameter
berupa array satu dimensi berisikan nama-nama. Function initialGroupingDescending akan
mengelompokkan nama-nama tersebut berdasarkan huruf depannya dan huruf depan harus terurut dari paling besar/descending dan dipisahkan ke dalam
array dua dimensi.

[EXAMPLE]
Input: ['Budi', 'Badu', 'Joni', 'Jono']
Output: 
[
  [ 'J', 'Joni', 'Jono' ],
  [ 'B', 'Budi', 'Badu' ]
]

Kamu tidak perlu peduli dengan urutan alphabet nama siapa yang keluar terlebih dahulu!

RULES:
- Dilarang menggunakan sintaks Set atau Regex
- Dilarang menggunakan built in function sort 

*/

function initialGroupingDescending(studentsArr) {
  let result = [];
  let group = [];

  for (let i = 0; i < studentsArr.length; i++) {
    for (let j = 0; j < studentsArr[i].length; j++) {
      if (!group.length) {
        group.push(studentsArr[i][j]);
        group.push(studentsArr[i]);
      } else if (studentsArr[i][j] === group[0]) {
        group.push(studentsArr[i]);
        i++;
      } else if (studentsArr[i][j] !== group[0]) {
        result.push(group);
        group = [];
        break;
      }
    }
  }

  return result;
}

console.log(initialGroupingDescending(["Budi", "Badu", "Joni", "Jono"]));
/*
[
  [ 'J', 'Joni', 'Jono' ],
  [ 'B', 'Budi', 'Badu' ]
]
*/

console.log(
  initialGroupingDescending(["Mickey", "Yusuf", "Donald", "Ali", "Gong"])
);
// // /*
// [
//   [ 'Y', 'Yusuf' ],
//   [ 'M', 'Mickey' ],
//   [ 'G', 'Gong' ],
//   [ 'D', 'Donald' ],
//   [ 'A', 'Ali' ]
// ]
// */

console.log(
  initialGroupingDescending(["Rock", "Stone", "Brick", "Rocker", "Sticker"])
);
// /*
// [
//   [ 'S', 'Stone', 'Sticker' ],
//   [ 'R', 'Rock', 'Rocker' ],
//   [ 'B', 'Brick' ]
// ]
// */

// for (let i = 0; i < studentsArr.length; i++) {
//   for (let j = 0; j < studentsArr[i].length; j++) {
//     if (!group.length) {
//       group.push(studentsArr[i][j]);
//       group.push(studentsArr[i]);
//       i++;
//     } else if (studentsArr[i][j] === group[j]) {
//       group.push(studentsArr[i]);
//     } else {
//       group.push(studentsArr[i]);
//     }
//   }
// }
