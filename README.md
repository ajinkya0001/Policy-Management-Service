# 🛡️ Policy Management System

A full-stack enterprise-style Policy Management System built using **Spring Boot**, **Java 21**, **React**, **Bootstrap**, **Axios**, and **PostgreSQL**.

This application allows users to manage insurance policies through a modern web interface with complete CRUD functionality, dashboard statistics, search capabilities, and responsive design.

---

# 📌 Features

## Backend

- RESTful CRUD APIs
- Spring Boot 3.x
- Java 21
- Spring Data JPA
- PostgreSQL
- Bean Validation
- Global Exception Handling
- Swagger/OpenAPI Documentation
- Dashboard Statistics API

---

## Frontend

- React (Vite)
- Bootstrap 5
- React Router
- Axios
- Responsive Layout
- Sidebar Navigation
- Header & Footer
- Dashboard
- Policy List
- Add Policy
- Edit Policy
- View Policy Details
- Search Policies
- Delete Confirmation Modal
- Toast Notifications
- Loader Component
- Empty State Component
- Currency Formatting
- Dynamic Status Badges

---

# 🛠️ Technology Stack

## Backend

- Java 21
- Spring Boot
- Spring Data JPA
- Hibernate
- PostgreSQL
- Maven
- Lombok
- Swagger (OpenAPI)

## Frontend

- React
- Vite
- Bootstrap
- Axios
- React Router DOM
- React Bootstrap
- React Toastify

## Tools

- Git
- GitHub
- VS Code
- IntelliJ IDEA / Eclipse
- Docker (In Progress)

---

# 📂 Project Structure

## Backend

```
Policy-Management-Service
│
├── controller
├── service
├── repository
├── entity
├── dto
├── mapper
├── exception
├── config
└── util
```

---

## Frontend

```
policy-management-ui
│
├── src
│   ├── assets
│   ├── components
│   │     ├── common
│   │     ├── dashboard
│   │     ├── navbar
│   │     ├── policy
│   │     └── shared
│   │
│   ├── context
│   ├── hooks
│   ├── layouts
│   ├── pages
│   ├── routes
│   ├── services
│   ├── utils
│   ├── App.jsx
│   └── main.jsx
```

---

# 📊 Current Modules

## Dashboard

- Total Policies
- Active Policies
- Inactive Policies

---

## Policy Management

- View All Policies
- Create Policy
- Edit Policy
- Delete Policy
- View Policy Details

---

## Search

Search by

- Policy Number
- Policy Holder Name

---

# 📸 Application Screens

- Dashboard
- Policy List
- Add Policy
- Edit Policy
- View Policy
- Delete Confirmation Modal

*(Screenshots will be added after deployment.)*

---

# 🚀 API Endpoints

| Method | Endpoint | Description |
|----------|-----------------------------|----------------|
| GET | /api/policies | Get All Policies |
| GET | /api/policies/{id} | Get Policy By ID |
| POST | /api/policies | Create Policy |
| PUT | /api/policies/{id} | Update Policy |
| DELETE | /api/policies/{id} | Delete Policy |
| GET | /api/policies/dashboard | Dashboard Statistics |

---

# ▶️ Running Backend

```bash
mvn clean install

mvn spring-boot:run
```

Runs on

```
http://localhost:8080
```

---

# ▶️ Running Frontend

```bash
npm install

npm run dev
```

Runs on

```
http://localhost:5173
```

---

# 🗄️ Database

Database

```
PostgreSQL
```

Configure

```
application.properties
```

Example

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/policydb
spring.datasource.username=postgres
spring.datasource.password=******
```

---

# 📖 Swagger

Swagger UI

```
http://localhost:8080/swagger-ui/index.html
```

OpenAPI Docs

```
http://localhost:8080/v3/api-docs
```

---

# 🚧 Upcoming Enhancements

- Sorting
- Pagination
- Status Filter
- Docker Compose
- Deployment
- CI/CD Pipeline
- Playwright End-to-End Testing
- Authentication & Authorization
- Role-Based Access Control
- Reports & Analytics

---

# 🐳 Docker

Docker support has been initiated.

Upcoming

- Backend Docker Container
- Frontend Docker Container
- PostgreSQL Docker Container
- Docker Compose

---

# 📚 Learning Objectives

This project demonstrates:

- Enterprise REST API Development
- Layered Architecture
- DTO Pattern
- Repository Pattern
- Exception Handling
- Frontend Component Architecture
- React Routing
- State Management
- API Integration
- Responsive UI Design
- Full Stack Development

---

# 👨‍💻 Author

**Ajinkya Jadkar**

Full Stack Java Developer

Tech Stack

- Java
- Spring Boot
- React
- PostgreSQL
- Docker
- Git
- Playwright

---

# ⭐ Future Scope

- JWT Authentication
- Role Management
- Claims Module
- Reports Module
- User Management
- Notification Service
- Email Integration
- Docker Deployment
- Kubernetes
- Jenkins CI/CD