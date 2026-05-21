# Todo List Application Using Zustand

## Introduction

This project is a simple Todo List Application developed using React and Zustand for state management. The application demonstrates how Zustand can be used to manage global state efficiently in React applications.

The application allows users to:

* Add todos
* Delete todos
* Mark todos as completed
* Clear completed todos
* Persist data using localStorage

---

# Technologies Used

* React
* Zustand
* Vite
* JavaScript
* CSS

# Installation and Setup

## Step 1: Create a new React project

```bash
npx create vite@latest todo-zustand
```

---

## Step 2: Navigate to Project Folder

```bash
cd todo-zustand
```

---

## Step 3: Install Dependencies

```bash
npm install
npm install zustand
```

---

## Step 4: Run the Application

```bash
npm run dev
```

---

# Features

* Add new todo tasks
* Delete existing tasks
* Toggle completed tasks
* Clear completed todos
* Persistent storage using localStorage
* Centralized state management with Zustand

---

# Zustand Store Functionalities

The Zustand store contains:

* `todos`
* `addTodo()`
* `toggleTodo()`
* `removeTodo()`
* `clearCompleted()`

---

# Persistence

The application uses Zustand persist middleware to store todos in browser localStorage. This allows tasks to remain saved even after refreshing the page.

---

# Challenges Faced

* Managing correct import paths
* Understanding Zustand state management
* Confusion between `main.jsx` and `index.jsx`
* Debugging syntax and rendering errors

---

# Learning Outcomes

Through this project, the following concepts were learned:

* React component structure
* Zustand state management
* Centralized store creation
* React hooks
* localStorage persistence
* Component communication

---

# Conclusion

This project successfully demonstrated the use of Zustand in React applications. Zustand simplified global state management and reduced the complexity of prop drilling. The persistence middleware also improved the functionality of the application by saving data in localStorage.

---

# References

* React Documentation: https://react.dev/
* Zustand Documentation: https://github.com/pmndrs/zustand
* Vite Documentation: https://vitejs.dev/
* MDN localStorage Documentation: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
