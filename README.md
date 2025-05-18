# UrbanWear - Tienda de Ropa Online 👕🛒

Proyecto fullstack de tienda de ropa, desarrollado con:

- **Backend:** Spring Boot 3.4.4, PostgreSQL, Hibernate, Spring Security, JWT, Lombok.
- **Frontend:** React.js con Vite, Axios, Context API para autenticación, diseño responsivo moderno.

---

## 🏗️ Estructura del proyecto

```bash
/back
  └── urbanwear
      └── src
          └── main
              ├── java/com/urbanwear
              │   ├── config
              │   ├── controller
              │   ├── model
              │   ├── repository
              │   ├── security
              │   └── service
              └── resources
/front
src/
├── api/
│   ├── auth.js
│   └── products.js
│
├── assets/
│   └── images/
│
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── ProductCard.jsx
│   └── ProtectedRoute.jsx
│
├── context/
│   └── AuthContext.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── Register.jsx
│   ├── AdminDashboard.jsx
│   ├── UserDashboard.jsx
│   └── ProductForm.jsx
│
├── routes/
│   └── AppRoutes.jsx
│
├── styles/
│   ├── CreateProduct.css
    └── main.css
│
├── App.jsx
├── index.js
└── config.js
