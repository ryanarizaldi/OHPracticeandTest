/*
==================================
Array Mastery: Fish Filter
==================================
[INSTRUKSI]
Fish Filter merupakan fungsi untuk menyaring data kumpulan spesies laut dan akan mengembalikan spesies
yang berisi kumpulan ikan dalam bentuk string
[CONTOH]
input: ['ikan indosiar', 'gurita', 'cumi-cumi', 'ikan bandeng']
output: ikan indosiar, dan ikan bandeng
[RULE]
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan .map, .splice, .slice, .filter, dan .reduce!
*/

function fishFilter(fishes) {
    let ikan = [];
    for (let i = 0; i < fishes.length; i++) { //cek ikan
        let strIkan = "";
        for (let j = 0; j < fishes[i].length; j++) {
            if (strIkan === "ikan") {
                ikan.push(fishes[i]);
                strIkan = "";
            } else {
                strIkan += fishes[i][j];
            }

        }

    }
    // return ikan;
    let result = ""
    if (ikan.length) { //ikan ada?
        for (let i = 0; i < ikan.length; i++) { // isi koma dan
            if (i === (ikan.length - 1)) {
                result += `dan ${ikan[i]}.`;
            } else {
                result += `${ikan[i]}, `;
            }
        }
    } else {
        result = "Tidak ada Ikan"
    }

    return result;
}

// TEST CASES
console.log(fishFilter(['ikan indosiar', 'gurita', 'cumi-cumi', 'ikan bandeng']));
// ikan indosiar, dan ikan bandeng
console.log(fishFilter(['gurita', 'ikan kerapu', 'ikan hiu'])); // ikan kerapu, dan Ikan hiu
console.log(fishFilter(['bintang laut', 'spongebob', 'patrick', 'ikan paus', 'ikan hiu', 'ikan tongkol']));
// ikan paus, ikan hiu, dan ikan tongkol
console.log(fishFilter(['gurita', 'udang'])); // tidak ada data