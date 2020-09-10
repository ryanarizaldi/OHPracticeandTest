// let dataHTML = [];

// let state = {
//   querySet: dataHTML,
//   page: 1,
//   rows: 2,
// };

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())

//   .then((data) => {
//     for (let i = 0; i < 6; i++) {
//       console.log;
//       tbl.innerHTML = `<td>${data[i].name}</td>
//       <td>${data[i].email}</td>
//       <td>${data[i].phone}</td>
//       <td>${data[i].website}</td>
//       <td>${data[i].address}</td>`;
//     }
//   });

// function show(data) {
//   const tbl = document.getElementById("table");
// }

let dataHTML = [];

let state = {
  querySet: dataHTML,
  page: 1,
  rows: 2,
};

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    return res.json();
  })
  .then((html) => {
    console.log("html is", html);
    state.querySet = html;
    console.log("queryset is", state.querySet);
    buildTable();
  });

const table = document.getElementById("row"),
  next = document.getElementById("next"),
  previous = document.getElementById("prev"),
  // tableDown = document.getElementById("tableDown"),
  para = document.getElementById("para");

function pagination(querySet, page, rows) {
  var trimStart = (page - 1) * rows;
  var trimEnd = trimStart + rows;

  var trimmed = querySet.slice(trimStart, trimEnd);

  var pages = Math.ceil(querySet.length / rows);
  return {
    querySet: trimmed,
    pages: pages,
  };
}

function nextTable() {
  if (state.page <= 5) {
    previous.disabled = false;
    next.disabled = false;
    table.innerHTML = "";
    state.page += 1;
    if (state.page >= 5) {
      next.disabled = true;
    }
    para.innerHTML = `<p>Page of ${state.page} of 5</p>`;
    buildTable();
  }
}

function previousTable() {
  if (state.page >= 1) {
    previous.disabled = false;
    next.disabled = false;
    table.innerHTML = "";
    state.page -= 1;
    if (state.page <= 1) {
      previous.disabled = true;
    }
    para.innerHTML = `<p>Page of ${state.page} of 5</p>`;
    buildTable();
  }
}

function buildTable() {
  var data = pagination(state.querySet, state.page, state.rows);
  console.log("data =" + data);

  var myList = data.querySet;
  console.log(myList);

  for (var i = 1 in myList) {
    table.innerHTML += `<tr style="text-align:right">
		    <td>${myList[i].name}</td>
		    <td>${myList[i].email}</td>
		    <td>${myList[i].phone}</td>
		    <td>${myList[i].website}</td>
		    <td>${myList[i].address.street}, ${myList[i].address.suite}, ${myList[i].address.city} ${myList[i].address.zipcode}</td>
		  </tr>`;
  }
}
