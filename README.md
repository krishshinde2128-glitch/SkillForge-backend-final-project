# SkillForge - Backend API

SkillForge is a RESTful Node.js and Express API built for an online learning platform. It features robust user authentication using Google Firebase and JSON Web Tokens (JWT), relational database mapping with MongoDB, and role-based protected routes.

## 🚀 Tech Stack
* **Runtime:** Node.js
* **Framework:** Express.js
* **Database:** MongoDB & Mongoose
* **Authentication:** Firebase Admin SDK & JWT (JSON Web Tokens)
* **Deployment:** Render

## ✨ Key Features
* **Two-Tier Authentication:** Secure user registration via Firebase Admin, with local JWT generation for stateless session management.
* **Complete CRUD Operations:** Create, Read, Update, and Delete capabilities for course management.
* **Smart Search:** Case-insensitive RegEx search functionality for finding courses by title or keyword.
* **Relational Mapping:** Dedicated models and controllers for Course Enrollments and User Reviews.
* **Custom Middleware:** Route protection ensuring only authenticated users bearing valid JWTs can modify database records.

---

## 🛠️ Local Setup & Installation

**1. Clone the repository**
```bash
git clone [https://github.com/yourusername/skillforge-backend-final-project.git](https://github.com/yourusername/skillforge-backend-final-project.git)
cd skillforge-backend-final-project
2. Install Dependencies

Bash
npm install
3. Configure Environment Variables
Create a .env file in the root directory and add the following keys. (Note: Do not commit this file to GitHub).

Code snippet
PORT=5001
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_secure_secret_key
4. Add Firebase Credentials
Generate a new private key from your Firebase Console (Project Settings > Service Accounts). Download the file, rename it to serviceAccountKey.json, and place it in the root directory.

5. Secure Your Secrets
Ensure you have a .gitignore file in the root directory that includes the following to prevent uploading sensitive data:

Plaintext
node_modules/
.env
serviceAccountKey.json
6. Start the Server

Bash
npm start
The server will start running on http://localhost:5001.

📡 API Endpoints
Authentication (/api/auth)
POST /api/auth/register - Register a new user (Saves to Firebase & MongoDB)

POST /api/auth/login - Login user and generate JWT

Courses (/api/courses)
GET /api/courses - Get all courses (Public)

GET /api/courses/search?keyword=xyz - Search courses using RegEx (Public)

GET /api/courses/:id - Get a single course by ID (Public)

POST /api/courses - Create a new course (Protected)

PUT /api/courses/:id - Update an existing course (Protected)

DELETE /api/courses/:id - Delete a course (Protected)

Enrollments (/api/enrollments)
GET /api/enrollments - View the logged-in user's active enrollments (Protected)

POST /api/enrollments - Enroll in a specific course (Protected)

Reviews (/api/reviews)
GET /api/reviews/:courseId - Get all reviews for a specific course (Public)

POST /api/reviews - Leave a review and rating for a course (Protected)

(Note: All Protected routes require an Authorization header formatted as Bearer <your_jwt_token>.)

☁️ Deployment (Render)
This API is configured for deployment on Render.

Ensure .env, node_modules/, and serviceAccountKey.json are listed in your .gitignore file.

Push the source code to a Private GitHub repository.

Connect the repository to a new Render Web Service.

Set the Root Directory to final-project (if your backend code is nested inside a subfolder).

Set the Build Command to npm install and the Start Command to npm start.

Add MONGO_URI, PORT, and JWT_SECRET in the Render Environment Variables dashboard.