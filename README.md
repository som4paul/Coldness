# MyShop E-commerce Application

## Overview
This is a full-stack e-commerce application with a React frontend and Node/Express backend. It demonstrates a basic setup with Redux Toolkit, Tailwind CSS, Razorpay integration, and MongoDB via Mongoose.

## Prerequisites
- Node.js 18+
- Docker (for production build)
- MongoDB instance
- Accounts/keys for Razorpay, Cloudinary, Shiprocket

## Setup
Clone the repository and create a `.env` file based on `.env.example` with your credentials.

Install dependencies in both the frontend and backend folders:
```bash
npm install --prefix frontend
npm install --prefix backend
```

### Development
Start the frontend and backend separately:
```bash
npm run dev --prefix frontend
npm run dev --prefix backend
```
The frontend runs on `localhost:3000` and the backend on `localhost:5000`.

### Production with Docker
Build and run the full stack using Docker:
```bash
docker build -t myshop .
docker run -p 5000:5000 --env-file .env myshop
```

### Folder Structure
- `frontend/` – React application
- `backend/` – Express server and API
- `Dockerfile` – multi-stage build for production
- `.env.example` – environment variable samples

### Deployment
The Docker image can be deployed to platforms like Heroku, Google Cloud Run, or AWS ECS. Ensure environment variables are configured on the target platform.
