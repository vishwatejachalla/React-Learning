import {ContactService} from "../../services/ContactService.js";

let contactIdFromURL = "";
document.addEventListener('DOMContentLoaded', () => {
    let contactId = document.baseURI.split("?")[1].split("=")[1];
    contactIdFromURL = contactId;
    ContactService.getContact(contactId).then((response) => {
        let contact = response.data;
        ContactService.getGroup(contact).then((resp) => {
            let group = resp.data;
            populateFormData(contact, group);
        }).catch((error) => {
            console.log(error);
        });
    }).catch((error) => {
        console.log(error);
    });
});

const populateFormData = (contact, group) => {
    document.querySelector('#name-input').value = contact.name;
    document.querySelector('#image-input').value = contact.imageUrl;
    document.querySelector('#mobile-input').value = contact.mobile;
    document.querySelector('#email-input').value = contact.email;
    document.querySelector('#company-input').value = contact.company;
    document.querySelector('#title-input').value = contact.title;
    document.querySelector('#display-image').setAttribute("src", contact.imageUrl);
    //document.querySelector('#group-input').value = group.name;
};


// form submitted
let editContactForm = document.querySelector('#edit-contact-form');
editContactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // read the form data
    let contact = {
        name: document.querySelector("#name-input").value,
        imageUrl: document.querySelector("#image-input").value,
        company: document.querySelector("#company-input").value,
        email: document.querySelector("#email-input").value,
        title: document.querySelector("#title-input").value,
        mobile: document.querySelector("#mobile-input").value,
        groupId: document.querySelector("#group-input").value,
    };

    if (contactIdFromURL !== "") {
        ContactService.updateContact(contact, contactIdFromURL).then((response) => {
            if (response && response.data) {
                // update is success
                window.location.href = "../index.html";
            }
        }).catch((error) => {
            console.log(error);
        });
    }

})













