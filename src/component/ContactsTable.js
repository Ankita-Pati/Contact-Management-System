import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button } from "@mui/material";
import axios from "axios";

const ContactsTable = ({ contacts, fetchContacts, onEdit }) => {
    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:5000/contacts/${id}`);
        fetchContacts();
    };

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        {["First Name", "Last Name", "Email", "Phone", "Company", "Job Title", "Actions"].map((header) => (
                            <TableCell key={header}>{header}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {contacts.map((contact) => (
                        <TableRow key={contact._id}>
                            {["firstName", "lastName", "email", "phoneNumber", "company", "jobTitle"].map((attr) => (
                                <TableCell key={attr}>{contact[attr]}</TableCell>
                            ))}
                            <TableCell>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => onEdit(contact)}
                                    style={{ marginRight: "10px" }}
                                >
                                    Edit
                                </Button>
                                <Button
                                    variant="contained"
                                    color="error"
                                    onClick={() => handleDelete(contact._id)}
                                >
                                    Delete
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ContactsTable;
