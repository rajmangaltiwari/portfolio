# Portfolio Project - Frontend & Backend Connection

## Project Structure

```
Backend/
├── models/
│   └── Contact.js          # MongoDB Contact schema
├── controllers/
│   └── contactController.js # Contact CRUD operations
├── routes/
│   └── contactRoutes.js    # Contact API routes
├── app.js                  # Main Express server
├── package.json
├── .env                    # Environment variables
├── .env.example           # Example env file
└── .gitignore

Frontend/
├── src/
│   ├── components/
│   │   ├── Contact.jsx    # Contact form (connected to API)
│   │   └── ...other components
│   ├── services/
│   │   └── api.js         # API utility functions
│   ├── App.jsx
│   └── main.jsx
├── .env.local             # Vite environment variables
├── vite.config.js
├── package.json
└── README.md
```

## What Was Done

### Backend
- ✅ Modular Express server with CORS
- ✅ MongoDB integration with Mongoose
- ✅ Contact model with validation
- ✅ Controller functions (CRUD operations)
- ✅ RESTful API routes
- ✅ Error handling middleware
- ✅ Environment configuration

### Frontend
- ✅ Contact component connected to backend
- ✅ Form validation and error handling
- ✅ Loading states
- ✅ Success/error messages
- ✅ API service utility file
- ✅ Environment configuration (.env.local)

## Features

- **Form Validation**: Email validation and required fields
- **Real-time Feedback**: Success and error messages
- **Loading State**: Button disabled while submitting
- **Data Persistence**: Messages saved to MongoDB
- **Error Handling**: Graceful error messages
- **CORS Enabled**: Frontend and backend communication
- **Responsive Design**: Mobile-friendly contact form

## Quick Start

1. **Backend**
   ```bash
   cd Backend
   npm install
   npm run dev
   ```

2. **Frontend** (in another terminal)
   ```bash
   cd Frontend
   npm install
   npm run dev
   ```

3. Open your browser and test the contact form!

See `SETUP_GUIDE.md` for detailed instructions.
