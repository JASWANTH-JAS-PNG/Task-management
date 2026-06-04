# MERN Task Management Application

A full-stack Task Management Web Application built with MongoDB, Express.js, React.js, and Node.js. This application allows users to register, log in, and manage their tasks with full CRUD operations, search functionality, filtering, and pagination.

## 🌟 Features

### Core Features
- **User Authentication**: Secure registration and login with JWT
- **Task Management**: Create, read, update, and delete tasks
- **Task Status**: Mark tasks as pending or completed
- **Task Priority**: Assign priority levels (low, medium, high)
- **Protected Routes**: Secure routes with JWT middleware

### Advanced Features
- **Search Functionality**: Search tasks by title and description
- **Filtering**: Filter tasks by status and priority
- **Pagination**: Efficient pagination for large task lists
- **Responsive Design**: Mobile-friendly UI
- **Form Validation**: Client-side and server-side validation
- **Error Handling**: Comprehensive error handling and user feedback

## 🛠️ Tech Stack

### Frontend
- **React.js 19** - UI library
- **React Router v6** - Client-side routing
- **Context API** - State management
- **CSS Modules** - Styling
- **Fetch API** - HTTP client

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **express-validator** - Input validation
- **CORS** - Cross-origin resource sharing

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm or yarn
- MongoDB Atlas account (for cloud database)

## 🚀 Installation & Setup

### 1. Clone the Repository
```bash
cd C:\Users\pedda\Desktop\test
```

### 2. Backend Setup

Navigate to the server folder:
```bash
cd task-server
```

Install dependencies:
```bash
npm install
```

Create a `.env` file in the `task-server` directory:
```bash
cp .env.example .env
```

Update `.env` with your MongoDB Atlas credentials:
```
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster-name>.mongodb.net/<database-name>?retryWrites=true&w=majority
JWT_SECRET=your_very_secure_jwt_secret_key_change_this_in_production
PORT=5000
NODE_ENV=development
```

**Getting MongoDB Atlas Connection String:**
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account or log in
3. Create a new cluster
4. Click "Connect" and select "Connect your application"
5. Copy the connection string and replace `<username>`, `<password>`, and `<cluster-name>`

Start the backend server:
```bash
npm run dev
```

The server will run on `http://localhost:5000`

### 3. Frontend Setup

In a new terminal, navigate to the task-app folder:
```bash
cd task-app
```

Install dependencies:
```bash
npm install
```

Create a `.env` file in the `task-app` directory:
```bash
cp .env.example .env
```

The `.env` file should contain:
```
REACT_APP_API_URL=http://localhost:5000/api
```

Start the React development server:
```bash
npm start
```

The application will open in your browser at `http://localhost:3000`

## 📝 API Documentation

### Authentication Endpoints

#### Register User
```
POST /api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}

Response: {
  "success": true,
  "token": "jwt_token_here",
  "user": {
    "id": "user_id",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

#### Login User
```
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}

Response: {
  "success": true,
  "token": "jwt_token_here",
  "user": {
    "id": "user_id",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

#### Get Current User
```
GET /api/auth/me
Authorization: Bearer jwt_token_here

Response: {
  "success": true,
  "user": { ... }
}
```

### Task Endpoints

All task endpoints require authentication (Bearer token in Authorization header).

#### Create Task
```
POST /api/tasks
Authorization: Bearer jwt_token_here
Content-Type: application/json

{
  "title": "Complete project",
  "description": "Finish the MERN project",
  "priority": "high"
}

Response: {
  "success": true,
  "task": { ... }
}
```

#### Get All Tasks
```
GET /api/tasks?status=pending&priority=high&search=project&page=1&limit=10
Authorization: Bearer jwt_token_here

Response: {
  "success": true,
  "tasks": [ ... ],
  "pagination": {
    "total": 25,
    "page": 1,
    "pages": 3,
    "limit": 10
  }
}
```

#### Get Single Task
```
GET /api/tasks/:taskId
Authorization: Bearer jwt_token_here
```

#### Update Task
```
PUT /api/tasks/:taskId
Authorization: Bearer jwt_token_here
Content-Type: application/json

{
  "title": "Updated title",
  "status": "completed",
  "priority": "medium"
}
```

#### Delete Task
```
DELETE /api/tasks/:taskId
Authorization: Bearer jwt_token_here
```

#### Toggle Task Status
```
PATCH /api/tasks/:taskId/toggle
Authorization: Bearer jwt_token_here
```

## 🎨 UI Pages

### 1. Login Page (`/login`)
- Email and password input fields
- Login button
- Link to register page
- Form validation

### 2. Register Page (`/register`)
- Name, email, password, and confirm password fields
- Register button
- Link to login page
- Password confirmation validation

### 3. Dashboard Page (`/dashboard`)
- User greeting with name
- Add new task form
- Task list with all tasks
- Search functionality
- Filter by status and priority
- Pagination controls
- Edit and delete buttons for each task
- Toggle task status button
- Logout button

## 🗂️ Project Structure

```
task-management/
├── task-app/                 # Frontend (React)
│   ├── src/
│   │   ├── components/       # Reusable components
│   │   │   ├── TaskForm.js
│   │   │   ├── TaskList.js
│   │   │   ├── TaskFilter.js
│   │   │   └── ProtectedRoute.js
│   │   ├── pages/           # Page components
│   │   │   ├── Login.js
│   │   │   ├── Register.js
│   │   │   └── Dashboard.js
│   │   ├── services/        # API services
│   │   │   └── api.js
│   │   ├── context/         # Context API
│   │   │   └── AuthContext.js
│   │   ├── styles/          # CSS modules
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── .env.example
│
└── task-server/              # Backend (Node.js + Express)
    ├── src/
    │   ├── models/          # Mongoose schemas
    │   │   ├── User.js
    │   │   └── Task.js
    │   ├── routes/          # API routes
    │   │   ├── auth.js
    │   │   └── tasks.js
    │   ├── controllers/     # Route handlers
    │   │   ├── authController.js
    │   │   └── taskController.js
    │   ├── middleware/      # Custom middleware
    │   │   ├── auth.js
    │   │   └── validation.js
    │   └── server.js        # Main server file
    ├── package.json
    └── .env.example
```

## 🔒 Security Features

- **JWT Authentication**: Secure token-based authentication
- **Password Hashing**: Passwords are hashed using bcryptjs
- **Protected Routes**: API endpoints require valid JWT token
- **Input Validation**: Server-side validation of all inputs
- **CORS**: Cross-origin requests are restricted
- **Error Messages**: Generic error messages to prevent information leakage

## ⚙️ Environment Variables

### Backend (.env)
```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
NODE_ENV=development
```

### Frontend (.env)
```
REACT_APP_API_URL=http://localhost:5000/api
```

## 📦 Dependencies

### Frontend
- react@19.2.7
- react-dom@19.2.7
- react-router-dom@6.16.0
- react-scripts@5.0.1

### Backend
- express@4.18.2
- mongoose@7.5.0
- jsonwebtoken@9.0.2
- bcryptjs@2.4.3
- dotenv@16.3.1
- cors@2.8.5
- express-validator@7.0.0
- nodemon@3.0.1 (dev)

## 🚀 Deployment

### Frontend Deployment (Vercel/Netlify)
1. Build the React app: `npm run build`
2. Deploy the build folder to Vercel or Netlify
3. Set environment variables in the hosting platform

### Backend Deployment (Heroku/Railway)
1. Create an account on Heroku or Railway
2. Connect your GitHub repository
3. Set environment variables in the platform
4. Deploy the backend

## 📸 Screenshots

[Add screenshots of your application here]

## 🐛 Troubleshooting

### MongoDB Connection Error
- Check your MongoDB Atlas connection string
- Ensure your IP is whitelisted in MongoDB Atlas
- Verify username and password

### CORS Error
- Ensure the backend is running on `http://localhost:5000`
- Check the CORS configuration in `server.js`
- Verify the `REACT_APP_API_URL` in frontend `.env`

### Port Already in Use
- Change the PORT in backend `.env` to another port (e.g., 5001)
- Update `REACT_APP_API_URL` in frontend `.env` accordingly

## 📝 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

Created by [Your Name]

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For support, email support@example.com or open an issue in the repository.
