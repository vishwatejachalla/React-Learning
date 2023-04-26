import {ContactService} from "../../services/ContactService.js";

document.addEventListener('DOMContentLoaded', () => {
    let contactId = document.baseURI.split("?")[1].split("=")[1];
    ContactService.deleteContact(contactId).then((response) => {
        if (response && response.data) {
            window.location.href = "../index.html";
        }
    }).catch((error) => {
        console.log(error);
    });
});