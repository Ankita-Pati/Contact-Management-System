import React, { useState, useEffect } from "react";
import { TextField, Button } from "@mui/material";
import axios from "axios";

const ContactForm = ({ fetchContacts, selectedContact, clearSelection }) => {
    const [contact, setContact] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        company: "",
        jobTitle: "",
    });

    useEffect(() => {
        if (selectedContact) {
            setContact(selectedContact);
        }
    }, [selectedContact]);

    const handleChange = (e) => {
        setContact({ ...contact, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (contact._id) {
            // Update existing contact
            await axios.put(`http://localhost:5000/contacts/${contact._id}`, contact);
        } else {
            // Create new contact
            await axios.post("http://localhost:5000/contacts", contact);
        }
        setContact({
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            company: "",
            jobTitle: "",
        });
        fetchContacts();
        clearSelection();
    };

    return (
        <form onSubmit={handleSubmit}>
            {["firstName", "lastName", "email", "phoneNumber", "company", "jobTitle"].map((field) => (
                <TextField
                    key={field}
                    label={field}
                    name={field}
                    value={contact[field] || ""}
                    onChange={handleChange}
                    required={field !== "company" && field !== "jobTitle"}
                    fullWidth
                    margin="normal"
                />
            ))}
            <Button variant="contained" type="submit">
                {contact._id ? "Update Contact" : "Add Contact"}
            </Button>
        </form>
    );
};

export default ContactForm;
