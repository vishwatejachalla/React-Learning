let userList = [];
let getUsersFromServer = () => {
    let serverURL = "https://randomuser.me/api?results=50";
    axios.get(serverURL).then((response) => {
        userList = response.data.results;
        displayCustomerTable(userList);
    }).catch((error) => {
        console.error(error);
    });
};
getUsersFromServer();
/*let buttonElement = document.querySelector("#btn");
buttonElement.addEventListener('click', getUsersFromServer);*/

let displayCustomerTable = (userList) => {
    let tableBodyElement = document.querySelector("#table-body");
    let tableRows = "";
    for (let user of userList) {
        tableRows += `<tr>
                           <td>${user.login.uuid.substring(user.login.uuid.length - 5)}</td>
                           <td><img src="${user.picture.large}" alt=""></td>
                           <td>${user.name.title}. ${user.name.first} ${user.name.last}</td>
                           <td>${user.dob.age} yrs</td>
                           <td>${user.location.city}</td>
                           <td>${user.location.state}</td>
                           <td>${user.location.country}</td>
                      </tr>\n`;
    }
    tableBodyElement.innerHTML = tableRows;
};