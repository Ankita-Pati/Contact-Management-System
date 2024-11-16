1. Project Overview
markdown

# Contact Management System

This is a simple web application that allows users to manage contact information. Users can add, view, edit, and delete contacts. It is built using React (frontend), Node.js (backend), and MongoDB (database).

---
2. Setup Instructions

## Setup Instructions

### Backend Setup
1. Navigate to the `backend` folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npx nodemon index.js
   ```
4. The backend will run at `http://localhost:5000`.

### Frontend Setup
1. Navigate to the `frontend` folder:
   ```bash
   cd contact-management
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React app:
   ```bash
   npm start
   ```
4. The frontend will run at `http://localhost:3000`.

---
3. Database Schema
## Database Schema

### Contacts Collection
The `contacts` collection in the `contact_management` database stores the following fields:
- `firstName`: String (required)
- `lastName`: String (required)
- `email`: String (required, unique)
- `phoneNumber`: String (required)
- `company`: String
- `jobTitle`: String

Example Document:
```json
{
    "firstName": "Ankita",
    "lastName": "Patil",
    "email": "ankita@gmail.com",
    "phoneNumber": "9234567890",
    "company": "Wipro",
    "jobTitle": "Software Developer"
}


#### **4. Challenges and Solutions**

## Challenges Faced

1. **Database Connection Issues**:
   - Initially faced difficulties connecting to MongoDB.
2.**Frontend part Issues**:
   - Faced issues while typing command npm start it was giving vulnerabilites,errors like cannot find module ajv/dist/compile/codegen' and solved it by uninstalling node.js version 20 and installed node.js version 18 because it was compatible version and typed the command npm install --save dev ajv@^7 which resloved the issue.
   -Faced issue during creation of edit button action in ContactsTable.js and tried to solve it by referring internet.
   
5. Features  
   ## Features

- Add new contacts.
- View all contacts in a table with sorting and pagination.
- Edit existing contacts.
- Delete existing contacts.

---

