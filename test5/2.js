// Competencies: Functions + Loopings
/*
==============
Three Cols Box
==============
Instruksi
=========
Buatlah sebuah function bernama drawThreeColsBox yang menjalankan proses dengan menggunakan looping (boleh dengan while atau for) dan menerima 
satu parameter bernama height.
Buatlah sebuah angka dengan pola pemunculan tiga angka berurut sebagai berikut:
contoh 1 (drawThreeColsBox(3)):
9 8 7
6 5 4
3 2 1

contoh 2 (drawThreeColsBox(5)):
15 14 13
12 11 10
9 8 7
6 5 4
3 2 1

contoh 3 (drawThreeColsBox(1)):
3 2 1

Note: pola angka harus dimulai dari 1, dan setiap angka diberikan spasi.
Hati-hati, yang ditampilkan adalah sebuah string, bukan angka!
tinggi kotak sesuai dengan nilai variable height!
*/

// SKELETON CODE (Code Sample)
function drawThreeColsBox(height) {
    let num = height * 3;
    let arr = [];

    for (num; num >= 1; num--) { //push urutan angka kedalam array (bisa aja kondisinya i<height*3) dari nomor terbesar. [max,.....,min]

        arr.push(num);


    }

    let str = "";

    let count = 0;
    for (let i = 0; i < arr.length; i++) { //memasukkan index array kedalam string dengan count sebagai trigger ganti baris
        if (count > 2) {
            count = 0;
            str += `\n${arr[i]} `;
            count++;
        } else {
            str += `${arr[i]} `;
            count++;
        }
    }

    console.log(str);
    // return console.log(num);

}

// drawThreeColsBox(3);
// drawThreeColsBox(5);
drawThreeColsBox(1);