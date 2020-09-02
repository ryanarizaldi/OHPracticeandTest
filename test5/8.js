/**

Implementasikan function formatDuration() yang akan menerima satu parameter yaitu jumlah detik
dan akan mengembalikan string berupa detik yang sudah di-format supaya bisa dibaca oleh manusia

Function ini hanya menerima angka yang tidak negatif (0..MAX INTEGER). Jika angka adalah 0, maka
function akan mengembalikan string "Sekarang". Jika tidak, maka akan mengembalikan durasi yang
sudah di-format (kombinasi tahun, hari, jam, menit dan detik).

Contoh:
  formatDuration(62)    // "1 tahun dan 2 detik"
  formatDuration(3662)  //  "1 jam, 1 menit dan 2 detik"
Spasi harus persis seperti output yang diharapkan

Aturan:
- Tiap satuan waktu harus dipisah dengan 1 koma dan 1 spasi (", "). Kecuali satuan terakhir, yang
akan dipisah dengan " dan ", seperti ditulis dalam Bahasa Indonesia.

- Satuan waktu yang lebih besar harus dikeluarkan sebelum yang lebih kecil.
Maka, "1 detik dan 1 tahun" adalah SALAH, tapi "1 tahun dan 1 detik" adalah BENAR.

// return num === 1 ? 1 : num + numberSum(num - 1);

// let output = 0;
// for(let i = 1; i <= num; i++){
//   output += i;    
// }
// return output;
- Satuan waktu harus digunakan sebanyak mungkin. Contohnya adalah function tidak boleh
mengembalikan nilai "61 detik", tapi "1 menit dan 1 detik" sebagai gantinya.

- DILARANG ada satuan waktu yang duplikat seperti "5 detik dan 1 detik"

- DILARANG menampilkan satuan waktu yang isinya adalah 0 seperti "2 jam, 1 menit dan 0 detik"

Untuk soal ini, asumsikan bahwa 1 tahun = 365 hari, dan 1 hari = 24 jam

Urutan satuan waktu dari terbesar ke terkecil:
 - Tahun Hari Jam Menit Detik

*/

function formatDuration(seconds) {
  // let time = [];
  // let secondLeft = 0;
  let tahun = 0;
  // let bulan = 0;
  let hari = 0;
  let jam = 0;
  let menit = 0;
  let detik = 0;

  if (!seconds) {
    return "Sekarang";
  } else {
    detik = seconds;
    while (detik > 59) {
      menit++;
      detik -= 60;
      while (menit > 59) {
        jam++;
        menit -= 60;
        while (jam > 23) {
          hari++;
          jam -= 24;
          while (hari > 364) {
            tahun++;
            hari -= 365;
          }
        }
      }
    }
  }

  let arrTime = [];

  if (tahun) {
    arrTime.push(`${tahun} tahun`);
  }

  if (hari) {
    arrTime.push(`${hari} hari`);
  }

  if (jam) {
    arrTime.push(`${jam} jam`);
  }

  if (menit) {
    arrTime.push(`${menit} menit`);
  }

  if (detik) {
    arrTime.push(`${detik} detik`);
  }

  let out = "";
  for (let i = 0; i < arrTime.length; i++) {
    if (arrTime.length === 1) {
      out += `${arrTime[i]}.`;
    } else if (i === arrTime.length - 1) {
      out += ` dan ${arrTime[i]}.`;
    } else if (i === 0) {
      out += `${arrTime[i]}`;
    } else {
      out += `, ${arrTime[i]}`;
    }
  }

  return out;
}

console.log(formatDuration(10000)); // 2 jam, 46 menit dan 40 detik
console.log(formatDuration(3662)); // 1 jam, 1 menit dan 2 detik
console.log(formatDuration(62)); // 1 menit dan 2 detik
console.log(formatDuration(500000)); // 5 hari, 18 jam, 53 menit dan 20 detik
console.log(formatDuration(2000000)); // 23 hari, 3 jam, 33 menit dan 20 detik
console.log(formatDuration(94608000)); // 3 tahun
console.log(formatDuration(126144060)); // 4 tahun dan 1 menit
console.log(formatDuration(0)); // Sekarang

// for (let i = 0; i < arrTime.length; i++) {
//     if (i = arrTime.length - 1) {
//         out = out + `dan ${arrTime[i]}.`
//     } else if (arrTime.length === 1) {
//         out += `${arrTime[i]}.`
//     } else {
//         out = out + `${arrTime[i]}, `
//     }

// }
