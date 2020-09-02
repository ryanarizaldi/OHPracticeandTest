function secondLargest(angka) {
    let largest = angka[0];

    for (let i = 0; i < angka.length; i++) {
        if (largest < angka[i]) {
            largest = angka[i];
        }
    }

    let secondLarge;
    let dif = largest;

    for (let i = 0; i < angka.length; i++) {
        const newDif = largest - angka[i];
        if (newDif !== 0 && dif > newDif) {
            diff = newDif;
            secondLarge = angka[i];
        }
    }
    return secondLarge;
}

console.log(secondLargest([5, 2, 1, 4]));
console.log(secondLargest([999, 5, 0, 1, 4, 998])); // 998
console.log(secondLargest([15, 32, 11, 14])); // 15
console.log(secondLargest([5, 4, 3, 2, 1, 0])); // 4
console.log(secondLargest([123, 321, 143, 313])); // 313