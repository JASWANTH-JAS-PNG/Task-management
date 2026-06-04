# MERN Task Management App - Quick Start Guide

## Prerequisites
- Node.js v14+ installed
- npm or yarn
- MongoDB Atlas account (free tier available)

## Step 1: Setup MongoDB Atlas (5 minutes)

1. Go to https://www.mongodb.com/cloud/atlas
2. Sign up and create a new cluster (choose free tier)
3. Click "Connect" → "Connect your application"
4. Copy the connection string
5. Replace `<username>`, `<password>`, and `<cluster-name>` with your credentials

## Step 2: Start Backend Server (Terminal 1)

```bash
# Navigate to server directory
cd C:\Users\pedda\Desktop\test\task-server

# Install dependencies
npm install

# Create .env file with your MongoDB URI
# Copy content from .env.example and update MONGODB_URI

# Start development server
npm run dev
```

✅ Backend will run on: http://localhost:5000

## Step 3: Start Frontend App (Terminal 2)

```bash
# Navigate to app directory
cd C:\Users\pedda\Desktop\test\task-app

# Install dependencies (if not already installed)
npm install

# Create .env file if needed
# REACT_APP_API_URL=http://localhost:5000/api

# Start React app
npm start
```

✅ Frontend will open at: http://localhost:3000

## Step 4: Test the Application

1. **Register**: Click "Register" and create a new account
2. **Login**: Log in with your credentials
3. **Create Task**: Click "+ Add New Task" and fill the form
4. **Manage Tasks**:
   - Click the circle button to toggle task status
   - Click "Edit" to update a task
   - Click "Delete" to remove a task
5. **Filter & Search**: Use the search and filter controls
6. **Pagination**: Navigate through pages if you have many tasks

## Folder Structure

```
C:\Users\pedda\Desktop\test\
├── task-app/           # Frontend (React)
├── task-server/        # Backend (Node.js)
└── README.md          # Full documentation
```

## API Base URL

- **Development**: http://localhost:5000/api
- **Production**: Update in `task-app/.env`

## Common Issues

| Issue | Solution |
|-------|----------|
| "Cannot find module" | Run `npm install` in the respective folder |
| MongoDB connection error | Check credentials and IP whitelist in Atlas |
| Port 3000 already in use | Kill the process or use a different port |
| CORS error | Ensure backend is running and `.env` has correct API URL |

## Next Steps

1. Customize the UI in `task-app/src/styles/`
2. Add more features to the backend
3. Deploy to production (Vercel, Netlify for frontend; Heroku, Railway for backend)
4. Add unit tests with Jest and React Testing Library
5. Implement additional features (notifications, categories, etc.)

## Useful Commands

### Backend
```bash
npm run dev        # Start development server with hot reload
npm start          # Start production server
npm install <pkg>  # Install new package
```

### Frontend
```bash
npm start          # Start development server
npm run build      # Build for production
npm test           # Run tests
```

## Need Help?

- Check the main README.md for detailed documentation
- Review API endpoints in the README
- Check backend logs for server errors
- Check browser console for frontend errors

Happy coding! 🚀
