import {ContactService} from "../../services/ContactService.js";

document.addEventListener('DOMContentLoaded', () => {
    let contactId = document.baseURI.split("?")[1].split("=")[1];
    ContactService.getContact(contactId).then((response) => {
        let contact = response.data;
        ContactService.getGroup(contact).then((resp) => {
            let group = resp.data;
            displayContactDetails(contact, group);
        }).catch((error) => {
            console.log(error);
        });
    }).catch((error) => {
        console.log(error);
    });
});

const displayContactDetails = (contact, group) => {
    let contactsRowElement = document.querySelector('#contacts-row');
    let contactDetailsElement = `<div class="col-sm-3 ">
                                    <img alt=""
                                         class="img-fluid rounded-circle shadow-lg"
                                         src="${contact.imageUrl}">
                                </div>
                                <div class="col-sm-8 offset-1">
                                    <ul class="list-group shadow-lg">
                                        <li class="list-group-item">
                                            Name : <span class="fw-bold">${contact.name}</span>
                                        </li>
                                        <li class="list-group-item">
                                            Email : <span class="fw-bold">${contact.email}</span>
                                        </li>
                                        <li class="list-group-item">
                                            Mobile : <span class="fw-bold">${contact.mobile}</span>
                                        </li>
                                        <li class="list-group-item">
                                            Company : <span class="fw-bold">${contact.company}</span>
                                        </li>
                                        <li class="list-group-item">
                                            Title : <span class="fw-bold">${contact.title}</span>
                                        </li>
                                        <li class="list-group-item">
                                            Group : <span class="fw-bold">${group.name}</span>
                                        </li>
                                    </ul>
                                </div>`;
    contactsRowElement.innerHTML = contactDetailsElement;
};