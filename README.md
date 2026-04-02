# Byte Blog

A modern full-stack blog platform built with React, Vite, Redux Toolkit, and Appwrite for authentication and post management.

## 🚀 Project Summary

Byte Blog is a clean and responsive blog CRUD application.

- User signup/login (Appwrite auth)
- Create, read, edit, delete posts
- Rich text editor for post content
- Client-side state management with Redux Toolkit
- Protected routes and authenticated UX

## 🧩 Tech Stack

- Frontend: React, Vite, JSX, CSS
- State: Redux Toolkit (`authSlice`)
- Backend/BaaS: Appwrite (auth + database)
- Routing: React Router
- Linting: ESLint

## 📁 Folder Structure

- `src/`
  - `appwrite/` - Appwrite setup (config + auth helpers)
  - `components/` - UI components (forms, buttons, layout)
  - `pages/` - Route screen components (Home, AddPost, EditPost, etc.)
  - `store/` - Redux state slice and store setup
  - `assets/` - images and static assets

## ⚙️ Setup and Running Locally

1. Install dependencies

```bash
npm install
```

2. Create Appwrite project and get:
- Appwrite endpoint
- Appwrite project ID

3. Configure environment variables (`.env`)

```env
VITE_APPWRITE_ENDPOINT=https://<your-appwrite-endpoint>
VITE_APPWRITE_PROJECT_ID=<your-project-id>
```

4. Start the development server

```bash
npm run dev
```

5. Open in browser:

- http://localhost:5173

## 🧪 Build and Production

```bash
npm run build
npm run preview
```

## ⭐ Features

- Authentication with email/password
- Protected routes (login required for add/edit/delete)
- Post listing with card previews
- Full post view and post management
- Reusable components: `Button`, `Input`, `Select`, `PostCard`, `RTE`

## 🔐 Appwrite Integration Points

- `src/appwrite/config.js`: Appwrite client initialization
- `src/appwrite/auth.js`: auth functions (signup, login, logout)

## 🛠️ Redux / Store

- `src/store/authSlice.js`: handles user state and auth session
- `src/store/store.js`: configures Redux store

## 📌 Notes

- Ensure Appwrite database collections and permissions are configured for posts and users.
- Add Appwrite rules for read/write access as needed.

## 🤝 Contribution

1. Fork repository
2. Create feature branch (`feature/xxx`)
3. Commit and push
4. Open pull request with summary and testing details

## 📜 License

MIT
