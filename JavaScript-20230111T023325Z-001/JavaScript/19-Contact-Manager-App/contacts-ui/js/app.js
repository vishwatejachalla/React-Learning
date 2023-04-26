import {ContactService} from "../../services/ContactService.js";

// fetch all contacts from server
const fetchAllContactsFromServer = () => {
    ContactService.getAllContacts().then((response) => {
        const contacts = response.data;
        displayCards(contacts);
    }).catch((error) => {
        console.log(error);
    });
};
document.addEventListener('DOMContentLoaded', fetchAllContactsFromServer);


// display cards
let displayCards = (contacts) => {
    let cardsRowElement = document.querySelector("#cards-row");
    let eachCardElement = "";
    for (let contact of contacts) {
        let {imageUrl, name, mobile, email, id} = contact;
        eachCardElement += `<div class="col-sm-6 mt-3">
                                <div class="card shadow-lg">
                                    <div class="card-body">
                                        <div class="row align-items-center">
                                            <div class="col-sm-3">
                                                <img alt=""
                                                     class="img-fluid rounded-circle"
                                                     src="${imageUrl}">
                                            </div>
                                            <div class="col-sm-8">
                                                <ul class="list-group">
                                                    <li class="list-group-item">
                                                        Name : <span class="fw-bold">${name}</span>
                                                    </li>
                                                    <li class="list-group-item">
                                                        Email : <span class="fw-bold">${email}</span>
                                                    </li>
                                                    <li class="list-group-item">
                                                        Mobile : <span class="fw-bold">${mobile}</span>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="col-sm-1 d-flex flex-column align-items-center">
                                                <a class="btn btn-warning" href="contacts-ui/viewContact.html?contactId=${id}">
                                                    <i class="fa fa-eye"></i>
                                                </a>
                                                <a class="btn btn-primary mt-2" href="contacts-ui/editContact.html?contactId=${id}">
                                                    <i class="fa fa-edit"></i>
                                                </a>
                                                <a class="btn btn-danger mt-2" href="contacts-ui/deleteContact.html?contactId=${id}">
                                                    <i class="fa fa-trash-alt"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                               </div>`
    }
    cardsRowElement.innerHTML = eachCardElement;
};