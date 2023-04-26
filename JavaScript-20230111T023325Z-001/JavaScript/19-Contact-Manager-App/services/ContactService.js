class ContactService {
    static serverURL = "http://localhost:9000";

    // get all contacts
    static getAllContacts() {
        let url = `${this.serverURL}/contacts`;
        return axios.get(url);
    }

    // get a contact
    static getContact(contactId) {
        let url = `${this.serverURL}/contacts/${contactId}`;
        return axios.get(url);
    }

    // create a contact
    static createContact(contact) {
        let url = `${this.serverURL}/contacts/`;
        return axios.post(url, contact);
    }

    // update a contact
    static updateContact(contact, contactId) {
        let url = `${this.serverURL}/contacts/${contactId}`;
        return axios.put(url, contact);
    }

    // delete contact
    static deleteContact(contactId) {
        let url = `${this.serverURL}/contacts/${contactId}`;
        return axios.delete(url);
    }

    // get all groups
    static getAllGroups() {
        let url = `${this.serverURL}/groups`;
        return axios.get(url);
    }

    // get a group
    static getGroup(contact) {
        let {groupId} = contact;
        let url = `${this.serverURL}/groups/${groupId}`;
        return axios.get(url);
    }
}

export {ContactService}