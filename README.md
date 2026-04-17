# Student Manager (Flask + React)

## Table of Contents
- [Project Description](#project-description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [How to Use](#how-to-use)
- [API Endpoints](#api-endpoints)
- [Folder Structure](#folder-structure)
- [Future Improvements](#future-improvements)
- [Author](#author)


## Project Description
Student Manager is a full-stack web application that allows users to manage student records through a React frontend and a Flask backend API.

The application demonstrates core full-stack development concepts including RESTful APIs, state management in React, and CRUD (Create, Read, Update, Delete) operations. The backend handles all data operations while the frontend provides an interactive user interface.


## Features
- Add new students
- View all students
- Retrieve a single student by ID
- Update student details
- Delete a student
- Interactive and responsive UI
- Real-time updates without page reload


## Technologies Used
### Frontend
- React (Vite)
- JavaScript (ES6)
- CSS

### Backend
- Python 3
- Flask
- Flask RESTful API principles

### Communication
- Fetch API (HTTP requests)


## Setup Instructions

1. Clone the repository
- git clone https://github.com/Mwihaki112/Student-Manager.git
2. Navigate into the project folder
- cd Flask-Assignment2

3. Backend Setup (Flask)
- cd backend
- pipenv install
- pipenv shell
- python app.py
- The Flask server will run on: http://127.0.0.1:5000

3. Frontend Setup (React)
- cd frontend
- npm install
- npm run dev
- The React app will run on: http://localhost:5173

## How to Use
1. Open the React app in your browser
2. Add a student using the form
3. View all students displayed below
4. Click Edit to update student details
5. Click Delete to remove a student
6. Enter a student ID and click Get Student to retrieve a specific student

## API Endpoints
GET - /students - Retrieve all students
GET - /students/ - Retrieve a single student
POST - /students - Add a new student
PUT - /students/ - Update a student
DELETE - /students/ - Delete a student

## Folder Structure

Flask-Assignment2/
├── backend/
│   ├── app.py   
│   └── ...             
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx     
│   │   ├── App.css  
│   │   └── main.jsx
│   └── package.json
│
└── README.md

## Future Improvements
- Add form validation (prevent empty inputs)
- Add success/error notifications
- Add loading indicators
- Improve UI with a design framework (e.g., Tailwind CSS)
- Add authentication (login system)
- Connect to a real database (PostgreSQL / SQLite)
- Deploy app (Render / Vercel)

## Author
Agnes Ng'anga
GitHub: https://github.com/Mwihaki112⁠�
