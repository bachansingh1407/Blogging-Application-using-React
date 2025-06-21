# Blogging Application  

## Overview

A full-stack blogging web application built using React, Node.js, Express, and MySQL. This application allows users to create, edit, and share blogs while ensuring proper authentication and security.  

## Features  

- **User Authentication**: Secure login and registration using JWT (jsonwebtoken) and bcryptjs.  
- **Create, Edit, and Delete Blogs**: Users can manage their own blog posts.  
- **View Other Users' Profiles & Blogs**: Read articles from other users and explore their profiles.  
- **Profile Management**: Users can edit their profile details and update their passwords.  
- **Newsletter Subscription**: Users can subscribe to newsletters for updates.  
- **Context API for State Management**: Efficiently handles global state across the application.  

## Technologies Used  

### Frontend  
- **Axios for API requests** – Handles HTTP requests to communicate with the backend  
- **jwt-decode for decoding JWT tokens** – Extracts user information from authentication tokens  
- **Moment for date and time formatting** – Provides utilities for formatting and manipulating dates  
- **React for building the frontend user interface** – Core library for creating UI components  
- **React-DOM for rendering React components** – Connects React components to the browser DOM  
- **React-Icons for using SVG-based icons** – Provides a collection of customizable icons  
- **React-Router-Dom for client-side routing** – Enables navigation between different pages without reloading
  
### Backend  
- **Node.js with Express.js** – Handles server-side logic and API requests  
- **MySQL for database management** – Stores user data, blogs, and other application content  
- **JWT (jsonwebtoken) for authentication** – Ensures secure user authentication and session management  
- **bcryptjs for password hashing** – Secures user passwords by encrypting them before storing  
- **Express for handling server-side routing and middleware** – Manages API routes and middleware operations  
- **Multer for handling file uploads** – Enables users to upload images and other media  
- **Nodemon for automatic server restarts during development** – Improves development efficiency by watching file changes  
- **Path for managing and resolving file paths** – Helps in handling file system paths across different environments

## Installation and Setup  

### Prerequisites  
Ensure you have the following installed on your machine:  
- [Node.js](https://nodejs.org/)  
- [MySQL](https://www.mysql.com/)  
- npm or yarn  

### Backend Setup  

1. Navigate to the backend folder:  
   ```sh
   cd backend
   ```  
2. Install dependencies:  
   ```sh
   npm install
   ```  
3. Create a `.env` file and configure the following:  
   ```env
   PORT=5000
   DB_HOST=your_db_host
   DB_USER=your_db_user
   DB_PASSWORD=your_db_password
   DB_NAME=your_db_name
   JWT_SECRET=your_jwt_secret
   ```  
4. Run the backend server:  
   ```sh
   npm start
   ```  
   The backend server runs on **`http://localhost:5000`**.  

### Frontend Setup  

1. Navigate to the frontend folder:  
   ```sh
   cd frontend
   ```  
2. Install dependencies:  
   ```sh
   npm install
   ```  
3. Start the frontend server:  
   ```sh
   npm start
   ```  
   The React app runs on **`http://localhost:3000`**.  

## API Endpoints  

### Authentication  
- `POST /api/auth/register` – User registration  
- `POST /api/auth/login` – User login  
- `POST /api/auth/logout` – User logout  

### Blog Management  
- `POST /api/blogs` – Create a new blog  
- `GET /api/blogs` – Get all blogs  
- `GET /api/blogs/:id` – Get a specific blog  
- `PUT /api/blog/update-blog/:id  ` – Update a blog  
- `DELETE /api/blogs/:id` – Delete a blog  

### User Management  
- `GET /api/blogs/user-details/:id` – Get user profile  
- `PUT /api/user/update-user/:id` – Update user profile  
- `PUT /api/users/:id/password` – Update password  

### Subscription  
- `POST /api/newsletter/subscribe` – Subscribe to newsletters  

## Folder Structure  

```
/blogging-app
  ├── backend
  │   ├── routes/
  │   ├── models/
  │   ├── controllers/
  │   ├── middleware/
  │   ├── config/
  │   ├── index.js
  │   ├── package.json
  ├── frontend
  │   ├── src
  │   │   ├── assets/
  │   │   ├── context/
  │   │   ├── pages/
  │   │   ├── App.js
  │   │   ├── index.js
  │   ├── package.json
  ├── README.md
```

## Contribution  
Feel free to contribute by forking the repository and submitting pull requests.  


