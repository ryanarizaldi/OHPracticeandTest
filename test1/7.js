function arrayMerge(firstData, secondData) {
    // var result = [];
    for (var k = 0; k < secondData.length; k++) {

        result = firstData.push(secondData[k]);
    }
    // result = firstData.concat(secondData);
    let unique = [...new Set(firstData)]
    return unique;
}

console.log(arrayMerge(['king', 'devil jin', 'akuma'], ['eddie', 'steve', 'geese']));
// ['king', 'devil jin', 'akuma', 'eddie', 'steve', 'geese']

console.log(arrayMerge(['sergei', 'jin'], ['jin', 'steve', 'bryan']));
// ['sergei', 'jin', 'steve', 'bryan']

console.log(arrayMerge(['alisa', 'yoshimitsu'], ['devil jin', 'yoshimitsu', 'alisa', 'law']));
// ['alisa', 'yoshimitsu', 'devil jin', 'law']

console.log(arrayMerge([], ['devil jin', 'sergei']));
// ['devil jin', 'sergei']

console.log(arrayMerge(['hwoarang'], []));
// ['hwoarang']

console.log(arrayMerge([], []));
// []