function reverseAll(arr) {
    const newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        let newStr = "";
        for (let j = arr[i].length - 1; j >= 0; j--) {
            newStr = newStr + arr[i][j]; //alexei[5]
        }
        newArr.push(newStr);
        // newArr.push(arr[i]);
    }
    return newArr;
}

console.log(reverseAll(["dimitri", "sergei", "alexei"]));
// ['iexela', 'iegres', 'irtimid']

console.log(reverseAll(["kira", "lawliet", "near", "mello"]));
// [ 'ollem', 'raen', 'teilwal', 'arik' ]

console.log(reverseAll([]));
// []