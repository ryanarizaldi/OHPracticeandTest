/**
CSV to Object
==============
Implementasikan function `csvToObject` untuk merubah string yang
diberikan menjadi sebuah object baru.
`csvToObject` menerima 2 parameter yaitu `keys` dan `values`
yang merupakan sebuah CSV (Comma Separated Values)
Keys & values di dalam object baru nantinya akan diambil dari kedua
parameter yang diberikan.
Contoh:
- Input: 'name,age', 'Aang,112'
  Output: { name: 'Aang', age: '112' }
- Input: 'title,description,content', 'Foobar,Foo and Bar,Foobar content'
  Output: { title: 'Foobar', description: 'Foo and Bar', content: 'Foobar Content' }
- Input: '', ''
  Output: { }
*/

function csvToObject(keys, values) {
    let resObj = {};
    let parameter = "";
    let val = "";
    for (let i = 0; i <= keys.length; i++) {
        if (keys[i] === ",") {
            resObj[parameter] = " ";
            parameter = "";

        } else if (i === keys.length) {
            resObj[parameter] = " ";
        } else {
            parameter += keys[i];
        }
    }
    // for value terus di assign ke resObj keys
    for (let i = 0; i <= values.length; i++) {
        let j = 0;
        let key = Object.keys(resObj)[j]
        if (values[i] === ",") {
            resObj[key] = val;
            val = "";
            j++;
            // continue;
        } else if (i === values.length) {
            resObj[key] = val;
            j++;
            // break;
        } else {
            val += values[i];
        }

    }
    return resObj;

}

console.log(csvToObject('name,phoneNumber', 'Dimitri,+666123654'));
// { name: 'Dimitri', phoneNumber: '+666123654' }

console.log(csvToObject('firstName,lastName,nationality', 'Sergei,Dragunov,Russia'));
// { firstName: 'Sergei', lastName: 'Dragunov', nationality: 'Russia' }

// console.log(csvToObject('', ''));
// { }


// let result = {};

// for (let i = 0; i < keys.length; i++) {
//     let parameter = ""
//     let value = ""
//     for (let j = 0; j < values.length; j++) {
//         let tempVal = "";
//         if (values[j] === ",") {
//             value = tempVal;
//             tempVal = ""
//         } else if (values[j] === values.length) {
//             value = tempVal;
//         } else {
//             tempVal += values[j];
//         }

//         if (keys[i] === ",") {
//             result[parameter] = value;
//         } else {
//             parameter += keys[i];
//         }
//     }

// }
// return result;