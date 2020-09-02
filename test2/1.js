/*
================================
Array Mastery: Add Evens and Odds
================================

[INSTRUKSI]

Function addEvenOdd akan menerima satu parameter berupa array of number. 
Kelompokkanlah hasil penjumlahan bilangan yang genap dan bilangan yang ganjil dan return array 2 dimensi 
di mana array pertama merupakan hasil penjumlahan angka ganjil dan array selanjutnya adalah hasil penjumlahan angka genap

Contoh:
input: [3, 5, 7, 8]
output: [[15], [8]]

input: [2, 4, 6, 10]
output: [[0], [22]]

input: []
output: [[0], [0]]

[RULE]
- Wajib menuliskan pseudocode. Tidak ada pseudocode / pseudocode tidak match dengan kode maka indikasi soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan .map, .filter, dan .reduce!
- Dilarang menggunakan sintaks eval()!
*/

function addEvenOdd(arrNum) {

    let angkaGanjil = [];
    let angkaGenap = [];
    let jumlahGenap = 0;
    let jumlahGanjil = 0;
    let hasil = [];

    for (let i = 0; i < arrNum.length; i++) { //perulangan untuk mengakses tiap index dari arrNum
        if (arrNum[i] % 2) { // setelah mendapatkan value dari tiap index, seleksi bilangan yang ganjil, jika tidak masuk ke else
            angkaGanjil.push(arrNum[i]);
        } else {
            angkaGenap.push(arrNum[i]); // angka ganjil dan genap disimpan pada variabel angkaGanjil dan angkaGenap
        }
    }

    if (angkaGenap && angkaGanjil) { // validasi jika variabel angkaGenap dan ganjil emmpunyai nilai
        for (let j = 0; j < angkaGenap.length; j++) {
            jumlahGenap += angkaGenap[j]; //proses penjumlahan tiap index di array angkaGenap
        }
        for (let k = 0; k < angkaGanjil.length; k++) {
            jumlahGanjil += angkaGanjil[k]; //proses penjumlahan tiap index di array angkaGanjil

        }

    }
    let hasilGanjil = [jumlahGanjil];
    let hasilGenap = [jumlahGenap];

    return hasil = [hasilGanjil, hasilGenap]
}

// console.log(addEvenOdd())
console.log(addEvenOdd([3, 5, 7, 8])); // [ [15], [8] ]

console.log(addEvenOdd([2, 4, 6, 10])); // [ [0], [22] ]

console.log(addEvenOdd([])); // [ [0], [0] ]