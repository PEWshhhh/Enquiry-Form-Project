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
```

---

---

## 🚀 Getting Started

Follow these steps to get the project running on your local machine:

### 1. Setup the Backend (Server)
1. **Navigate to the server folder**:  
   Open your terminal and type:  
   `cd server`
2. **Install dependencies**:  
   `npm install`
3. **Configure Environment Variables**:  
   Create a `.env` file in the `server` folder and add your MongoDB URL:  
   `MONGODB_URL=your_mongodb_atlas_connection_string`
4. **Start the server**:  
   `npm start`
   *The backend will be live at `http://localhost:8020`*.

### 2. Setup the Frontend (Client)
1. **Navigate to the client folder**:  
   Open a new terminal and type:  
   `cd client/user-app`
2. **Install dependencies**:  
   `npm install`
3. **Start the React app**:  
   `npm start`
   *The frontend will open automatically at `http://localhost:3000`*.

---
