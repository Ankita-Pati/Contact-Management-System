import React, { useEffect, useState } from "react";
import ContactForm from "./component/ContactForm";
import ContactsTable from "./component/ContactsTable";
import axios from "axios";

const App = () => {
    const [contacts, setContacts] = useState([]);
    const [selectedContact, setSelectedContact] = useState(null);

    const fetchContacts = async () => {
        const response = await axios.get("http://localhost:5000/contacts");
        setContacts(response.data);
    };

    useEffect(() => {
        fetchContacts();
    }, []);

    const handleEdit = (contact) => {
        setSelectedContact(contact);
    };

    const clearSelection = () => {
        setSelectedContact(null);
    };

    return (
        <div>
            <h1>Contact Management</h1>
            <ContactForm
                fetchContacts={fetchContacts}
                selectedContact={selectedContact}
                clearSelection={clearSelection}
            />
            <ContactsTable contacts={contacts} fetchContacts={fetchContacts} onEdit={handleEdit} />
        </div>
    );
};

export default App;
