var nilai = 100;
var nama = "Budi";

if (nilai >= 80 && nilai <= 100) {
    console.log("Nilai " + nama + " mendapatkan nilai A")
} else if (nilai >= 65 && nilai <= 79) {
    console.log("Nilai " + nama + " mendapatkan nilai b")
} else if (nilai >= 50 && nilai <= 64) {
    console.log("Nilai " + nama + " mendapatkan nilai C")
} else if (nilai >= 35 && nilai <= 49) {
    console.log("Nilai " + nama + " mendapatkan nilai D")
} else if (nilai >= 1 && nilai <= 34) {
    console.log("Nilai " + nama + " mendapatkan nilai E")
} else {
    console.log("nilai tidak valid")

}