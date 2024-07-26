
## eBookShelf
### Table of Contents
<pre>
 Introduction
 •Features
 •Technologies Used
 •Installation
 •Usage
 •API Endpoints
 •Contributing
 •Contact
 •Introduction
 <br>
The eBookShelf is a comprehensive full-stack web application designed to manage e-books in a library setting. The system allows administrators to browse, borrow, and return e-books can add and manage the collection.

# Features
Borrow and return e-books
Manage users and e-books (Admin functionality)
Responsive and user-friendly interface
<br>
# Technologies Used
Frontend
React.js
Axios for HTTP requests
Bootstrap for styling
Backend
Spring Boot
MySQL for the database
JPA/Hibernate for ORM
Other
Maven for project management
Git for version control
Installation
Prerequisites
Node.js and npm
Java JDK
Maven
MySQL
Backend Setup
Clone the repository:
bash
Copy code
git clone https://github.com/yourusername/eBookLibrary.git
Navigate to the backend directory:
bash
Copy code
cd eBookLibrary/backend
Configure MySQL database:
Update the application.properties file with your database details:
properties
Copy code
spring.datasource.url=jdbc:mysql://localhost:3306/library_db?serverTimezone=UTC
spring.datasource.username=your_username
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update
Build and run the backend application:
bash
Copy code
mvn spring-boot:run
Frontend Setup
Navigate to the frontend directory:
bash
Copy code
cd ../frontend
Install dependencies:
bash
Copy code
npm install
Start the frontend application:
bash
Copy code
npm start
Usage
Open your web browser and navigate to http://localhost:3000.

Browse the collection of e-books.
Borrow or return e-books as needed.
Admins can log in to add, edit, or delete e-books and manage user accounts.
API Endpoints

<br>
Books
GET /api/books - Get all books
POST /api/books - Add a new book
PUT /api/books/{id} - Update a book
DELETE /api/books/{id} - Delete a book
POST /api/books/{bookId}/borrow/{userId} - Borrow a book
POST /api/books/{bookId}/return - Return a book
<br>
Users
GET /api/users - Get all users
POST /api/users - Add a new user

DELETE /api/users/{id} - Delete a user


</pre>
# Contact
If you have any questions or suggestions, feel free to contact me at utsav45.jn@gmail.com.
