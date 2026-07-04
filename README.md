# My Fullstack App

A full-stack web application with an Express/MongoDB backend and a React frontend.

## Project Structure

```
my-fullstack-app/
│
├── backend/
│   ├── package.json
│   ├── server.js              # Entry point for backend
│   ├── .env                   # Backend environment variables
│   ├── config/
│   │   └── db.js              # Database connection logic
│   ├── routes/
│   │   └── userRoutes.js      # API routes
│   ├── controllers/
│   │   └── userController.js  # Route handlers
│   ├── models/
│   │   └── User.js            # Database schema/model
│   └── middleware/
│       └── authMiddleware.js  # Authentication logic
│
├── frontend/
│   ├── package.json
│   ├── public/
│   │   └── index.html         # Main HTML file
│   ├── src/
│   │   ├── index.js           # React entry point
│   │   ├── App.js             # Main App component
│   │   ├── components/
│   │   │   └── Navbar.js
│   │   ├── pages/
│   │   │   └── Home.js
│   │   └── styles/
│   │       └── App.css
│
├── .gitignore
├── README.md
└── docker-compose.yml         # Optional: container setup
```

## Features

- **Backend**: Express REST API with MongoDB (Mongoose), JWT-based authentication,
  password hashing (bcrypt), and role-based access control (user/admin).
- **Frontend**: React app (functional components + hooks) with React Router and
  Axios wired up to call the backend.
- **Docker**: Optional `docker-compose.yml` to spin up MongoDB, backend, and frontend together.

## Getting Started (without Docker)

### 1. Backend

```bash
cd backend
npm install
# Edit .env with your own MongoDB URI and JWT secret
npm run dev   # requires nodemon (in devDependencies), or: npm start
```

The API will run on `http://localhost:5000` by default.

### 2. Frontend

```bash
cd frontend
npm install
npm start
```

The React app will run on `http://localhost:3000` and calls the backend at
`http://localhost:5000` (configurable via a `REACT_APP_API_URL` env variable).

## Getting Started (with Docker)

```bash
docker-compose up --build
```

This starts MongoDB, the backend (port 5000), and the frontend (port 3000).

## API Endpoints

| Method | Endpoint              | Access        | Description             |
|--------|-----------------------|---------------|--------------------------|
| POST   | `/api/users/register` | Public        | Register a new user     |
| POST   | `/api/users/login`    | Public        | Log in and get a JWT    |
| GET    | `/api/users/profile`  | Private       | Get current user's info |
| GET    | `/api/users`          | Private/Admin | List all users          |

Include `Authorization: Bearer <token>` header for private routes.

## Next Steps

- Add more resource models/routes as your app grows.
- Add form validation and toast notifications on the frontend.
- Add tests (e.g., Jest + Supertest for backend, React Testing Library for frontend).
- Set up CI/CD and environment-specific configs for production deployment.
