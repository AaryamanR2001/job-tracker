## Job Application Tracker

## Overview
The Job Application Tracker is a full-stack MERN web application designed to help users organize and manage their job applications. Instead of tracking applications using spreadsheets or notes, the application allows users to store application details such as the company name, position, application date, status, and notes in a database.

Users can add new applications, view all saved applications, update existing application details, and delete applications they no longer wish to track. This provides a simple and structured way to monitor the job search process.

This project demonstrates how a React frontend communicates with a Node.js and Express backend through a REST API, with MongoDB used for persistent data storage through Mongoose models.


## Future Improvements
This project can be extended in several ways:
- Add user authentication so each user can track their own applications.
- Add filtering or sorting (e.g., by date or status).
- Implement a search bar for company or position.
- Add email or notification reminders for interview dates or follow-ups.
- Create a dashboard with visualizations showing application statistics.


## Documentation
Tech Stack:
- Frontend: React + Vite
- Backend: Node.js + Express
- Database: MongoDB + Mongoose
- Architecture: RESTful API (Client–Server model)


## Project Structure
```
JOB-TRACKER/
│
├── client/
│   ├── public/
│   │   └── vite.svg
│   │
│   ├── src/
│   │   ├── assets/
│   │   │   └── react.svg
│   │   │
│   │   ├── css/
│   │   │   ├── apply.css
│   │   │   ├── index.css
│   │   │   ├── styles.css
│   │   │   └── tracker.css
│   │   │
│   │   ├── pages/
│   │   │   ├── Apply.jsx
│   │   │   ├── Home.jsx
│   │   │   └── Tracker.jsx
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── index.html
│   ├── package.json
│   
│
├── server/
│   ├── models/
│   │   └── Application.js
│   │
│   ├── routes/
│   │   └── applications.js
│   │
│   ├── package.json
│   └── server.js
```



## How to Run the Project
1. Clone the Repository

```
git clone https://github.com/AaryamanR2001/job-tracker.git
cd job-tracker
```
2. Backend Setup

Navigate to the backend folder:
```
cd backend
```

Install dependencies:
```
npm install
```

Start the backend server:
```
npm run start
```

The backend runs on:
http://localhost:8080

When the server starts, a test function checks if the database exists and inserts sample data if necessary.

3. Frontend Setup

Navigate to the frontend folder:
```
cd frontend
```

Install dependencies:
```
npm install
```

Start the development server:
```
npm run dev
```

The frontend runs on:
http://localhost:5173

4. Open the Application

- Open your browser and go to: http://localhost:5173


## How to Use the Application
*Home Page* -
The home page provides navigation to:
- Add a new application
- View saved applications

*Apply Page* -
Users fill out a form with:
- Company name
- Position
- Application date
- Status (Applied, Interviewing, Offer Received)
- Notes (optional)

When submitted, a POST request is sent to the backend API and the data is stored in the MongoDB database.

*Tracker Page* -
The tracker page displays all stored job applications.
When the page loads:
- A GET request retrieves all applications from the database.
- Applications are displayed in a list.

Users can:
- Update an application’s details or status.
- Delete an application they no longer wish to track.
- The interface updates dynamically after each operation.

## REST API Endpoints:
- GET /applications
Returns a list of all job applications.

- GET /applications/:id
Returns a single job application by its ID.

- POST /applications
Creates a new job application.

- PUT /applications/:id
Updates an existing job application.

- DELETE /applications/:id
Deletes a job application from the database.

All endpoints return JSON responses and connect the React frontend with the Node.js/Express backend using a RESTful API.

## Reflection
In this assignment, we extended our previous multi-page web application into a full MERN stack CRUD application. The project now includes a React frontend, an Express and Node.js backend, and a MongoDB database for persistent data storage. The application allows users to create, view, update, and delete job applications through a REST API.

The submitted project includes:
- A React frontend with multiple views
- A Node.js and Express backend server
- A MongoDB database connected through Mongoose
- A REST API supporting full CRUD operations
- A test function that populates the database with initial data
- A working client–server communication system

## Challenges
- One of the main challenges was connecting the React frontend with the Express backend. We needed to ensure that the API routes matched the frontend fetch requests and that the data being sent and received followed the correct format.
- Another challenge involved working with MongoDB and Mongoose. Designing the schema for job applications and correctly performing operations such as updates and deletions required understanding how MongoDB queries and document IDs work.
- Working as a group required coordination and making sure everyone followed a consistent structure when writing code.


## Successes
Despite these challenges, the project was successful. We implemented a working MERN application that supports full CRUD functionality and allows users to manage job applications in a structured way.

The application demonstrates:
- Full client–server communication
- REST API design and implementation
- MongoDB database integration
- React-based dynamic user interfaces
- Separation of frontend and backend architecture

Overall, this assignment helped strengthen our understanding of full-stack web development, the MERN technology stack, and how modern web applications manage and persist data. It also provided valuable experience working collaboratively on a larger web application project.

