import {ContactService} from "../../services/ContactService.js";

// when image url placed
document.querySelector('#image-input').addEventListener('input', (event) => {
    document.querySelector("#display-image").setAttribute("src", event.target.value);
})

// When the page loads
document.addEventListener('DOMContentLoaded', () => {
    ContactService.getAllGroups().then((response) => {
        let groups = response.data;
        displayGroupsDropdown(groups);
    }).catch((error) => {
        console.log(error);
    });
});

const displayGroupsDropdown = (groups) => {
    const groupSelectElement = document.querySelector('#group-input');
    let groupOptionsElement = `<option value="">Select a Group</option>`;
    for (let group of groups) {
        groupOptionsElement += `<option value="${group.id}">${group.name}</option>`;
    }
    groupSelectElement.innerHTML = groupOptionsElement;
};


let addContactFormElement = document.querySelector('#add-contact-form');
addContactFormElement.addEventListener('submit', (event) => {
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
    ContactService.createContact(contact).then((response) => {
        if (response && response.data) {
            // create is success
            window.location.href = "../index.html";
        }
    }).catch((error) => {
        console.log(error);
    });
})