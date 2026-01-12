# 🚀 MERN Enquiry Management System

A full-stack application built using the **MERN** (MongoDB, Express, React, Node.js) stack. This project provides a seamless interface for users to submit enquiries and an administrative dashboard to manage them in real-time.

---

## ✨ Key Features

* **📝 Dynamic Enquiry Form**: Built with React and optimized with real-time state management using `useState`.
* **📊 Live Data Table**: Displays all submitted enquiries fetched from MongoDB using `Axios`.
* **⚙️ Full CRUD Operations**:
    * **Create**: Instantly submit new enquiries.
    * **Read**: View all entries in a professional, responsive Flowbite-styled table.
    * **Update**: Edit existing entries using a smart "Update" button logic that re-uses the main form.
    * **Delete**: Remove entries with an instant UI refresh.
* **🔔 User Feedback**: Integrated `react-toastify` for beautiful success and error notifications.

---

## 🛠️ Technical Stack

| Layer | Technology Used |
| :--- | :--- |
| **Frontend** | React.js, Tailwind CSS, Flowbite React |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB with Mongoose ODM |
| **API Client** | Axios |

---

## 📂 Project Structure

```text
Enquiry Form Project/
├── client/          # React Frontend (user-app)
└── server/          # Node.js Backend (Express API)
