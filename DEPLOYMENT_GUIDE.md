# 🚀 Deployment Guide

## **Quick Deploy in 5 Minutes**

### **Frontend - Deploy to Vercel**

1. **Go to:** https://vercel.com/new
2. **Login** with GitHub
3. **Import Project** - select `Task-management` repo
4. **Framework:** React
5. **Build Command:** `npm run build`
6. **Install Command:** `npm install`
7. **Output Directory:** `build`
8. **Environment Variables:** (Optional, defaults work)
9. **Click Deploy**
10. **Your frontend URL:** `https://your-project.vercel.app`

---

### **Backend - Deploy to Railway**

1. **Go to:** https://railway.app
2. **Login** with GitHub
3. **Click "New Project"** → **Deploy from GitHub repo**
4. **Select:** `Task-management` repo
5. **Select service:** Node.js
6. **Select root directory:** `task-server`
7. **Add Environment Variables:**
   - `MONGODB_URI` = `mongodb+srv://jaswanthpandu606_db_user:Vlfy9W6ufefS1dgF@cluster0.aiokmeb.mongodb.net/task-management?retryWrites=true&w=majority`
   - `JWT_SECRET` = `your_super_secret_jwt_key_12345` (change this in production!)
   - `PORT` = `8080`
   - `NODE_ENV` = `production`
8. **Click Deploy**
9. **Your backend URL:** `https://your-backend.up.railway.app`

---

### **Update Frontend with Backend URL**

After deploying backend, update the frontend:

1. Go to **Vercel Dashboard** → Your frontend project
2. **Settings** → **Environment Variables**
3. **Add Variable:**
   - Name: `REACT_APP_API_URL`
   - Value: `https://your-backend.up.railway.app/api`
4. **Redeploy** → Click the latest deployment → **Redeploy**

---

## **Deployed URLs (After Setup)**

```
Frontend:  https://your-frontend.vercel.app
Backend:   https://your-backend.up.railway.app/api
Database:  MongoDB Atlas (already connected)
```

---

## **What Gets Deployed**

✅ **Frontend (task-app/):**
- React login/register pages
- Dashboard with task management
- All API calls point to deployed backend

✅ **Backend (task-server/):**
- Authentication endpoints (register, login)
- Task CRUD operations
- MongoDB connection
- JWT validation

---

## **Post-Deployment Checklist**

- [ ] Frontend loads at Vercel URL
- [ ] Backend API responds at Railway URL
- [ ] Can register new account
- [ ] Can login with registered credentials
- [ ] Can create/edit/delete tasks
- [ ] Search and filter work
- [ ] Pagination works

---

## **Security Notes**

🔐 **Change JWT_SECRET:**
- Current: `your_super_secret_jwt_key_12345`
- Generate new secret: `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"`
- Update in Railway environment variables

---

## **Troubleshooting**

| Issue | Solution |
|-------|----------|
| Frontend shows 404 errors | Check Vercel build logs; ensure `package.json` build script is correct |
| API calls fail | Verify backend URL in frontend environment variables matches deployed backend |
| MongoDB connection error | Check MongoDB URI in Railway environment variables |
| Login/Register not working | Check JWT_SECRET matches between frontend and backend |

---

**🎉 Your app will be live in minutes!**
