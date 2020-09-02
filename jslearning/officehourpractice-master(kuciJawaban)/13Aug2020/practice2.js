/**
=========================
Array Mastery: Add Titles
=========================

[INSTRUKSI]

Function addTitle akan menerima satu parameter berupa array data orang dan akan menambahkan
title (Mr. / Ms. / Mrs.) kepada setiap orang yang ada di dalam array tersebut.

Akan diberikan 3 elemen di setiap array:
1. Name
2. Gender ('male'/'female')
3. Married (true/false)

Jika gender = 'male', maka tambahkan 'Mr.' sebelum name
Jika gender = 'female' dan married = true, maka tambahkan 'Mrs.' sebelum name
Jika gender = 'female' dan married = false, maka tambahkan 'Ms.' sebelum name

Function akan mengembalikan string berupa nama-nama yang sudah ditambahkan dengan title
ex: Mr. *****, Mrs. *****, Ms. *****, Mr. *****


[RULE]
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan .map, .filter, dan .reduce!
- Dilarang menggunakan .split, indexOf!

*/

function addTitle(people) {
  if (!people.length) {
    return "No Data";
  }

  let newPeople = [];
  for (let i = 0; i < people.length; i++) {
    if (people[i][1] === "male") {
      newPeople.push(`Mr. ${people[i][0]}`);
    } else if (people[i][1] === "female" && people[i][2] === true) {
      newPeople.push(`Mrs. ${people[i][0]}`);
    } else {
      newPeople.push(`Ms. ${people[i][0]}`);
    }
  }
  return newPeople;
}

console.log(
  addTitle([
    ["Sergei", "male", true],
    ["Alyona", "female", false],
  ])
); // Mr. Sergei, Ms. Alyona

console.log(
  addTitle([
    ["Dimitri", "male", false],
    ["Anastasia", "female", false],
    ["Vladlena", "female", true],
  ])
); // Mr. Dimitri, Ms. Anastasia, Mrs. Vladlena

console.log(addTitle([])); // No data
