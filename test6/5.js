/**
Highest Top Speed
=================
Implementasikan function `highestTopSpeed` untuk mencari
top speed yang paling tinggi dari data yang diberikan.

Function ini akan menerima satu parameter yaitu `data`
yang memiliki tipe data string.

Di dalam string `data` terdapat nama orang dan top speed orang
tersebut. Tiap orang akan dipisah dengan tanda koma ','
Tugas kamu adalah untuk mencari top speed tertinggi dari
string yang telah diberikan

# Contoh I/O
Contoh input dan output bisa kamu lihat di test case

# Kondisi khusus
- Jika string kosong, maka tampilkan 'No data'

# Constraints
- DILARANG menggunakan built-in function .map, .filter, .reduce
- DILARANG menggunakan built-in object Math
- DILARANG menggunakan built-in function .sort
- DILARANG menggunakan built-in function .indexOf
*/

function highestTopSpeed(data) {
    if (data) {
        let speed =[];
        for (let i = 0; i < data.length; i++) {
            let eachSpeed = ""
            if (data[i] === ":") {
                eachSpeed = data[i+1] + data[i+2] + data[i+3]
                speed.push(parseInt(eachSpeed));
            }
        }

        let fastest = 0;
        for (let i = speed.length-1; i >= 0; i--) {
            if (fastest < speed[i]) {
                fastest = speed[i];
            }
            
        }
        return fastest;
    } else {
        return "No data"
    }
    
  }
  
  console.log(highestTopSpeed('Nakazato:140 km/h,Ryosuke:180 km/h,Iketani:110 km/h'));
  // 180
  
  console.log(highestTopSpeed('Bunta:200 km/h,Takumi:180 km/h,Sudo:160 km/h'));
  // 200
  
  console.log(highestTopSpeed('Joshima:175 km/h,Hoshino:150 km/h,Inui:175 km/h'));
  // 175
  
  console.log(highestTopSpeed(''));
  // No data
  