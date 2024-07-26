
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
</pre>
<pre>
 # Introduction
<pre>
The eBookShelf is a comprehensive full-stack web application designed to manage e-books in a library setting. The system allows administrators to browse, borrow, and return e-books can add and manage the collection.
</pre>

# Features
<pre>
•Borrow and return e-books
•Manage users and e-books (Admin functionality)
•Responsive and user-friendly interface
<br>
</pre>
# Technologies Used
<pre>
Frontend
•React.js
•Axios for HTTP requests
•Bootstrap for styling
Backend
•Spring Boot
•MySQL for the database
•JPA/Hibernate for ORM
 <br>
</pre>
# Other
<pre>
•Maven for project management
•Git for version control
•Installation
•Prerequisites
•Node.js and npm
•Java JDK
•Maven
•MySQL
</pre>
# Backend Setup
<pre>
Clone the repository:

•git clone https://github.com/yourusername/eBookLibrary.git
•Navigate to the backend directory:
•cd eBookShelf/backend
•Configure MySQL database:
•Update the application.properties file with your database details:
 <br>
•properties

spring.datasource.url=jdbc:mysql://localhost:3306/library_db?serverTimezone=UTC
spring.datasource.username=your_username
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update
 
Build and run the backend application:

mvn spring-boot:run
Frontend Setup
 
Navigate to the frontend directory:
 
cd ../frontend
 
Install dependencies:

npm install
 
Start the frontend application:

npm start
</pre>
# Usage
<pre>
Open your web browser and navigate to http://localhost:3000.

•Browse the collection of e-books.
•Borrow or return e-books as needed.
 
•Admins can log in to add, edit, or delete e-books and manage user accounts.
 
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
