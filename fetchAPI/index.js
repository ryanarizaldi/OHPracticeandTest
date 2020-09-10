fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    const userList = document.getElementById("userList");
    for (let i = 0; i < 6; i++) {
      userList.innerHTML += `<li><h1>${data[i].name}</h1>
      <p>${data[i].email}</p>
      <p>${data[i].phone}</p>
      <p>${data[i].website}</p>
      </li>`;
    }
  });

//fetch api
//pagination using slice
//next func
//prev func
//show
