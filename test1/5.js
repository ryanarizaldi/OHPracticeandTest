function graduatesCount(scores) {

    let lulus = 0;
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] >= 75) {
            lulus++;
        }
    }

    if (scores.length === 0) {
        return "Data Kosong";
    } else if (lulus === 0) {
        return "Tidak Ada Yang Lulus"
    } else {
        return `${lulus} Orang lulus`;
    }
}

console.log(graduatesCount([76, 77, 30, 80, 10, 20])); // 3 orang lulus
console.log(graduatesCount([100, 100, 74, 60, 87])); // 3 orang lulus
console.log(graduatesCount([90, 100, 85, 79, 80, 74])); // 5 orang lulus
console.log(graduatesCount([100, 100, 100, 85, 90])); // Semua orang lulus
console.log(graduatesCount([0, 0, 0, 0, 0])); // Tidak ada yang lulus
console.log(graduatesCount([])); // Data kosong