Since I've seen your backend controllers, your frontend state logic, and your folder structure, I can help you write a README.md that makes your project look professional to anyone visiting your GitHub.

A good README explains what the project is and how to run it. Here is exactly what you should add:

🚀 Project Overview: MERN Enquiry Management System
This is a full-stack application built using the MERN (MongoDB, Express, React, Node.js) stack. It allows users to submit enquiry forms and provides an administrative view to Create, Read, Update, and Delete (CRUD) those enquiries in real-time.

Key Features
Dynamic Form: A React-based form with real-time state management using useState.

Live Data Table: Displays enquiries fetched from MongoDB using Axios.

Full CRUD Operations:

Create: Submit new enquiries.

Read: View all entries in a styled Flowbite table.

Update: Edit existing entries using a toggleable "Update" button logic.

Delete: Remove entries with instant UI refresh.

User Feedback: Integrated react-toastify for success and error notifications.

🛠️ Technical Stack
Frontend: React.js, Tailwind CSS, Flowbite React.

Backend: Node.js, Express.js.

Database: MongoDB with Mongoose ODM.

API Testing: Tested via Axios and Browser.

💻 How to Run This Project
Since the project is split into client and server folders, follow these steps:

1. Setup Backend
Bash

cd server
npm install
# Ensure your MongoDB is running on localhost or update the connection string
node index.js
Note: The server runs on port 8020 by default.

2. Setup Frontend
Bash

cd client/user-app
npm install
npm start
Note: The frontend runs on port 3000.

📂 Folder Structure
Plaintext

Enquiry Form Project/
├── client/          # React Frontend
│   └── user-app/    # Source code and components
└── server/          # Node.js Backend
    ├── Controller/  # API Logic (Insert, View, Update, Delete)
    ├── Model/       # MongoDB Schemas
    └── Routes/      # API Endpoints
