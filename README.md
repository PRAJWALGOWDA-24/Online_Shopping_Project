# Online Shopping Web Application (Java Full Stack)

## Overview

Online Shopping Web Application is a full-stack Java web project developed using HTML, CSS, JavaScript, Java Servlets, JDBC, and MySQL.

The application allows users to browse products, add items to cart, perform selective checkout, and view order history.

This project demonstrates frontend-backend integration, database connectivity, servlet handling, and MVC architecture concepts.

---

# Features

* Product browsing
* Add to cart functionality
* Remove items from cart
* Selective checkout using checkboxes
* Order history management
* Dynamic frontend interaction using JavaScript
* Database integration using JDBC
* Servlet-based backend processing

---

# Technologies Used

## Frontend

* HTML
* CSS
* JavaScript

## Backend

* Java
* Java Servlets
* Apache Tomcat

## Database

* MySQL
* JDBC

---

# Project Architecture

The project follows MVC (Model-View-Controller) architecture.

## View

* HTML
* CSS
* JavaScript

## Controller

* Java Servlets
* AddOrderServlet
* GetOrdersServlet

## Model

* MySQL Database

---

# Key Concepts Used

* Servlet lifecycle
* HTTP GET and POST methods
* Fetch API
* Async/Await in JavaScript
* JDBC Connectivity
* PreparedStatement
* localStorage
* Dynamic DOM Manipulation
* API communication

---

# Project Flow

1. User browses products on frontend.
2. Items are added to cart using JavaScript and localStorage.
3. User selects items and clicks checkout.
4. Fetch API sends POST request to backend servlet.
5. Servlet processes request using doPost().
6. JDBC connects backend with MySQL database.
7. Order details are stored in database.
8. Order history is retrieved using GET requests.
9. Data is displayed dynamically on profile page.

---

# Folder Structure

```text
onlineShopping/
│
├── home.html
├── shopping.html
├── cart.html
├── profile.html
├── script.js
├── style.css
│
├── WEB-INF/
│   ├── web.xml
│   ├── classes/
│   │   ├── AddOrderServlet.class
│   │   ├── GetOrdersServlet.class
│   │   └── AddToCartServlet.class
│   └── lib/
│       └── mysql-connector.jar
```

---

# Setup Instructions

## 1. Clone Repository

```bash
git clone <your-github-repository-link>
```

---

## 2. Install Apache Tomcat

* Download Apache Tomcat 9
* Extract the folder
* Place project inside:

```text
apache-tomcat/webapps/
```

---

## 3. Configure MySQL Database

Create database:

```sql
CREATE DATABASE shopping;
```

Create orders table:

```sql
CREATE TABLE orders (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    price INT
);
```

---

## 4. Add MySQL Connector

Place mysql-connector.jar inside:

```text
WEB-INF/lib/
```

---

## 5. Compile Servlet Files

```bash
javac -cp ".;C:\apache-tomcat-9.0.115\lib\servlet-api.jar;mysql-connector.jar" AddOrderServlet.java
```

---

## 6. Start Tomcat Server

```bash
startup.bat
```

OR

```bash
catalina.bat run
```

---

## 7. Open Application

```text
http://localhost:8080/onlineShopping/home.html
```

---

# Challenges Faced

During development, several real-world issues were encountered and resolved:

* HTTP 404 errors due to incorrect servlet mapping
* HTTP 405 errors due to unsupported request methods
* Database connection issues
* Incorrect JDBC credentials
* Missing servlet class files
* SQL column mismatch errors
* Frontend-backend communication issues

These challenges improved debugging and problem-solving skills.

---

# Future Improvements

* User Authentication
* Payment Gateway Integration
* Product Categories
* Responsive UI Design
* Admin Dashboard
* REST API implementation
* Spring Boot migration
* Cloud deployment

---

# Learning Outcomes

Through this project, I learned:

* Full-stack Java web development
* Java Servlets
* Tomcat server configuration
* JDBC database integration
* API communication using Fetch API
* HTTP request-response cycle
* MVC architecture
* Frontend and backend integration
* Debugging web applications

---

# Author

Prajwal Gowda

---

# License

This project is developed for educational and learning purposes.
