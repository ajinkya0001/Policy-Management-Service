# 🛡️ Policy Management System

A full-stack enterprise-style **Policy Management System** built using **Java 21**, **Spring Boot**, **React (Vite)**, **PostgreSQL**, and **Docker**.

The application enables users to manage insurance policies through a modern, responsive web interface with complete CRUD functionality, dashboard statistics, search, sorting, filtering, pagination, and Dockerized deployment.

---

# 🚀 Features

## Backend

* RESTful CRUD APIs
* Spring Boot 3.x
* Java 21
* Spring Data JPA
* Hibernate ORM
* PostgreSQL
* Bean Validation
* Global Exception Handling
* DTO & Mapper Pattern
* Dashboard Statistics API
* Swagger / OpenAPI Documentation

---

## Frontend

* React (Vite)
* Bootstrap 5
* React Bootstrap
* React Router DOM
* Axios
* Responsive Dashboard
* Sidebar Navigation
* Policy Management
* Dashboard Statistics
* Search Policies
* Status Filter
* Table Sorting
* Pagination
* View Policy Details
* Add Policy
* Edit Policy
* Delete Policy
* Delete Confirmation Modal
* Toast Notifications
* Loading Indicator
* Empty State Component
* Currency Formatting
* Dynamic Status Badges

---

# 🛠️ Technology Stack

## Backend

* Java 21
* Spring Boot
* Spring Data JPA
* Hibernate
* PostgreSQL
* Maven
* Lombok
* Swagger (OpenAPI)

---

## Frontend

* React
* Vite
* Bootstrap
* React Bootstrap
* React Router DOM
* Axios
* React Toastify

---

## DevOps & Tools

* Docker
* Docker Compose
* Git
* GitHub
* IntelliJ IDEA / Eclipse
* VS Code
* Postman

---

# 📂 Project Structure

```
Policy-Management-System
│
├── Policy-Management-Service
│   ├── src
│   ├── target
│   ├── Dockerfile
│   └── pom.xml
│
├── Policy-Management-UI
│   ├── src
│   ├── public
│   ├── Dockerfile
│   └── package.json
│
└── docker-compose.yml
```

---

# 📊 Current Modules

## Dashboard

* Total Policies
* Active Policies
* Inactive Policies

---

## Policy Management

* View Policies
* Add Policy
* Update Policy
* Delete Policy
* View Policy Details

---

## Search

Search policies by:

* Policy Number
* Policy Holder Name

---

## Filter

* Active Policies
* Inactive Policies

---

## Sorting

Sort by:

* Policy Number
* Holder Name
* Policy Type
* Premium Amount
* Status

---

## Pagination

* Client-side Pagination
* 5 Records Per Page
* Previous / Next Navigation

---

# 📸 Application Screens

* Dashboard
* Policy List
* Add Policy
* Edit Policy
* View Policy
* Delete Confirmation Modal

> Screenshots will be added after deployment.

---

# 🌐 REST API Endpoints

| Method | Endpoint                  | Description          |
| ------ | ------------------------- | -------------------- |
| GET    | `/api/policies`           | Get All Policies     |
| GET    | `/api/policies/{id}`      | Get Policy By ID     |
| POST   | `/api/policies`           | Create Policy        |
| PUT    | `/api/policies/{id}`      | Update Policy        |
| DELETE | `/api/policies/{id}`      | Delete Policy        |
| GET    | `/api/policies/dashboard` | Dashboard Statistics |

---

# ▶️ Run Locally

## Backend

```bash
mvn clean install

mvn spring-boot:run
```

Runs on:

```
http://localhost:8080
```

---

## Frontend

```bash
npm install

npm run dev
```

Runs on:

```
http://localhost:5173
```

---

# 🗄️ PostgreSQL Configuration

Configure the database in `application.properties`.

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/policydb
spring.datasource.username=postgres
spring.datasource.password=your_password
```

---

# 📖 API Documentation

## Swagger UI

```
http://localhost:8080/swagger-ui/index.html
```

## OpenAPI Docs

```
http://localhost:8080/v3/api-docs
```

---

# 🐳 Docker

The application is fully containerized using Docker.

## Docker Images

* Spring Boot Backend
* React Frontend
* PostgreSQL Database

---

## Docker Compose

Start the complete application:

```bash
docker compose up --build
```

Run in detached mode:

```bash
docker compose up -d
```

Stop containers:

```bash
docker compose down
```

View running containers:

```bash
docker ps
```

View logs:

```bash
docker compose logs -f
```

---

# 📚 Learning Objectives

This project demonstrates:

* Enterprise REST API Development
* Layered Architecture
* DTO Pattern
* Repository Pattern
* Exception Handling
* React Component Architecture
* React Routing
* State Management
* REST API Integration
* Responsive UI Development
* Docker Image Creation
* Docker Compose
* Docker Networking
* Persistent Volumes
* Full Stack Containerization

---

# 🚀 Upcoming Enhancements

* JWT Authentication
* Spring Security
* Role-Based Access Control
* Claims Management Module
* Reports Module
* User Management
* Email Notifications
* Multi-stage Docker Builds
* Nginx Reverse Proxy
* Docker Hub
* AWS EC2 Deployment
* GitHub Actions CI/CD
* Jenkins Pipeline
* Kubernetes
* Playwright End-to-End Testing

---

# 👨‍💻 Author

**Ajinkya Jadkar**

**Full Stack Java Developer**

### Skills

* Java
* Spring Boot
* React
* PostgreSQL
* Docker
* Docker Compose
* Git & GitHub
* REST APIs
* Playwright
* Maven

---

# ⭐ Project Status

✅ Backend Completed

✅ Frontend Completed

✅ CRUD Operations

✅ Dashboard

✅ Search

✅ Filtering

✅ Sorting

✅ Pagination

✅ Dockerized Backend

✅ Dockerized Frontend

✅ Dockerized PostgreSQL

✅ Docker Compose Integration

🚧 AWS Deployment (Next Phase)

🚧 CI/CD Pipeline

🚧 Kubernetes
