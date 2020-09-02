// Competency: Function + Looping + Conditional
/*
Instruksi
=========
Buatlah sebuah function bernama drawLadder yang menerima satu parameter bernama row, dan akan 
menampilkan x ke samping di baris ganjil, dan o di baris genap. Function drawLadder tidak perlu 
me-return apapun.
Function tidak perlu mengembalikan nilai (tidak perlu ada return).
Contoh 1
--------
input: 3
x
xo
xox

Contoh 2
--------
input: 6
tampilan:
x
xo
xox
xoxo
xoxox
xoxoxo

*/

function drawLadder(row) {
    let num = 0;
    let line = ""
    for (let i = 0; i < row; i++) {
        if (num % 2 === 0) {
            line += "x";
            console.log(line);
        } else {
            line += "o";
            console.log(line);
        }
        num++;

    }

}

drawLadder(6);
drawLadder(3);