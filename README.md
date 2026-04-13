# InterviewMaster AI

An AI-powered interview preparation platform that analyzes job descriptions and candidate profiles to generate personalized interview strategies, practice questions, and preparation roadmaps.

![Status](https://img.shields.io/badge/status-active-success)
![License](https://img.shields.io/badge/license-ISC-blue)

## Overview

InterviewMaster AI leverages Google's Gemini AI to help job seekers prepare for interviews effectively. The platform analyzes your resume, self-description, and target job description to provide:

- **Match Score**: See how well your profile aligns with the job requirements
- **Technical Questions**: Role-specific technical interview questions with model answers
- **Behavioral Questions**: Common behavioral questions tailored to the position
- **Skill Gap Analysis**: Identify areas where you need improvement
- **Preparation Roadmap**: A day-by-day study plan to maximize your chances of success
- **ATS-Optimized Resume**: Generate a tailored resume that passes Applicant Tracking Systems

## Features

- **AI-Powered Analysis**: Uses Google Gemini AI for intelligent job profile matching
- **Resume Parsing**: Upload PDF/DOCX resumes for automatic skill extraction
- **Custom Interview Questions**: Get technical and behavioral questions specific to the role
- **Skill Gap Identification**: Understand what skills you're missing and their severity
- **Personalized Roadmap**: Receive a structured preparation plan with daily tasks
- **Resume Generation**: Download a tailored, ATS-friendly resume in PDF format
- **Secure Authentication**: JWT-based auth with HTTP-only cookies
- **Report History**: Access all your past interview reports and strategies

## Tech Stack

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (Mongoose ODM)
- **AI Integration**: Google Generative AI SDK
- **Authentication**: JWT + bcryptjs
- **PDF Processing**: pdf-parse, puppeteer
- **Validation**: Zod

### Frontend
- **Framework**: React 19
- **Build Tool**: Vite
- **Routing**: React Router v7
- **HTTP Client**: Axios
- **Styling**: SCSS

## Project Structure

```
genai/
├── backend/
│   ├── src/
│   │   ├── config/         # Database configuration
│   │   ├── controllers/    # Request handlers
│   │   ├── middlewares/    # Auth, file upload middleware
│   │   ├── models/         # Mongoose schemas
│   │   ├── routes/         # API route definitions
│   │   ├── services/       # AI service layer
│   │   └── app.js          # Express app setup
│   ├── server.js           # Entry point
│   └── .env                # Environment variables
│
└── frontend/
    ├── src/
    │   ├── features/
    │   │   ├── auth/       # Auth pages & components
    │   │   └── interview/  # Interview report pages
    │   ├── hooks/          # Custom React hooks
    │   ├── services/       # API service functions
    │   └── App.jsx         # Root component
    └── package.json
```

## Installation

### Prerequisites

- Node.js v18+ installed
- MongoDB Atlas account (or local MongoDB)
- Google Generative AI API key

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file with the following variables:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   GOOGLE_GENAI_API_KEY=your_google_ai_api_key
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

   The backend will run on `http://localhost:3000`

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

   The frontend will run on `http://localhost:5173`

## API Endpoints

### Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST   | `/api/auth/register` | Register a new user |
| POST   | `/api/auth/login`    | Login user |
| POST   | `/api/auth/logout`   | Logout user (blacklists token) |
| GET    | `/api/auth/me`       | Get current user details |

### Interview

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST   | `/api/interview/report` | Generate interview report (requires PDF upload) |
| GET    | `/api/interview/reports` | Get all interview reports for user |
| GET    | `/api/interview/report/:id` | Get specific interview report |
| GET    | `/api/interview/resume/:id` | Download generated resume PDF |

## Usage

1. **Register/Login**: Create an account or log in with existing credentials
2. **Create Interview Plan**:
   - Paste the job description
   - Upload your resume (PDF/DOCX) OR write a self-description
   - Click "Generate My Interview Strategy"
3. **Review Report**:
   - View your match score
   - Practice technical and behavioral questions
   - Check skill gaps and work on them
   - Follow the day-by-day preparation roadmap
4. **Download Resume**: Get an ATS-optimized resume tailored to the job

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.

## Acknowledgments

- Built with [Google Generative AI](https://ai.google.dev/)
- UI components inspired by modern design systems
- Powered by MongoDB Atlas

---

**Made with React, Express, MongoDB, and Google AI**