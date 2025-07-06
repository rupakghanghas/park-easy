# Deployment Guide for Render

## Prerequisites
- GitHub repository with your code
- MongoDB Atlas cluster
- Render account

## Backend Deployment

### 1. Environment Variables
Set these environment variables in your Render backend service:

```
DB_URI=mongodb+srv://username:password@cluster.mongodb.net/database?retryWrites=true&w=majority
SECRET_JWT_CODE=your_secure_jwt_secret_key_here
SECRET=your_secure_jwt_secret_key_here
FRONTEND_URL=https://parking-frontend.onrender.com
NODE_ENV=production
```

### 2. Deployment Steps
1. Push your code to GitHub
2. Create a new Web Service on Render
3. Connect your GitHub repository
4. Set the environment variables above
5. Deploy

## Frontend Deployment

### 1. Update Backend URL
After deploying the backend, update the `REACT_APP_API_URL` in `Frontend/render.yaml` with your actual backend URL.

### 2. Deployment Steps
1. Update the backend URL in render.yaml
2. Push your code to GitHub
3. Create a new Static Site on Render
4. Connect your GitHub repository
5. Deploy

## Important Notes

1. **Database**: Ensure your MongoDB Atlas cluster allows connections from all IPs (0.0.0.0/0) for Render
2. **CORS**: The backend is configured to accept requests from the frontend URL
3. **Environment Variables**: Never commit sensitive information like database URLs or JWT secrets
4. **SSL**: Render provides SSL certificates automatically

## Troubleshooting

- Check Render logs for any deployment errors
- Verify environment variables are set correctly
- Ensure MongoDB connection string is valid
- Check CORS configuration if frontend can't connect to backend 