/*
==================================
Array Mastery: Pair Up
==================================
Nama:________
[INSTRUKSI]
Setiap student di Glints Academy ditugaskan untuk membuat tim project dengan komposisi tim dua orang.
Kita membutuhkan sebuah program untuk membuat tim-tim tersebut.
Function pairUp akan menerima satu parameter berupa array yang berisi string nama student.
Function ini akan mengelompokkan setiap dua nama menjadi satu kelompok, dan apabila tersisa satu student, 
student terakhir akan bersama instruktur.
Hasil pengelompokkan adalah sebuah array yang berisi string berupa nama dua orang student sebagai satu tim.
Formatnya adalah <Nama Student 1> dan <Nama Student 2>.
[CONTOH]
input: ['Budi', 'Badu', 'Indra', 'Indri']
output: ['Budi dan Badu', 'Indra dan Indri']
input: ['Budi', 'Badu', 'Indra', 'Indri', 'James']
output: ['Budi dan Badu', 'Indra dan Indri', 'James dan Instruktur']
input: []
output: []
[RULE]
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan method .map, .filter, atau .reduce!
*/

function pairUp(student) {
    let result = [];
    let counter = 0;
    for (let i = 0; i < student.length; i++) {
        if (i === student.length - 1) { // cek jika i sudah sampai di index terakhir dari students
            result.push(`${student[i]} dan Instruktur`);

        } else {
            result.push(`${student[i]} dan ${student[i+1]}`);
            i++; // i ditambah 2kali agar tdk double
        }
    }


    return result;
}

console.log(pairUp(['Budi', 'Badu', 'Indra', 'Indri']))
console.log("    ")
console.log(pairUp(['Budi', 'Badu', 'Indra', 'Indri', 'James']))




// for (let i = 0; i < student.length; i++) {
//     if (counter === 0) {
//         result.push(student[i] + " dan " + student[i + 1]);
//         counter++;
//     } else if (counter === 1) {
//         result.push(student[i + 1] + " dan " + student[i + (i + 1)]);
//         counter++;
//     } else if (counter % student.length !== 1) {
//         result.push(student[i + 2] + " dan instruktur");
//     }

// }