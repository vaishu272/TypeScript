# React + TypeScript Demo Project

This project demonstrates how to integrate **TypeScript with React** and build a small multi-page application using **React Router**.
The application includes examples of **TypeScript types, state management, props usage, and a Todo list with CRUD operations using localStorage**.

---

## 🚀 Features

- React + TypeScript integration
- Modern routing using **createBrowserRouter**
- Counter example using `useState`
- Props example using typed components
- Todo List with:
  - Add task
  - Edit task
  - Delete task
  - Mark task as completed

- Data persistence using **localStorage**
- Responsive UI with **Tailwind CSS**
- Icons using **react-icons**

---

## 📂 Project Structure

```
src
│
├── components
│   ├── TodoList.tsx
│   └── UserCard.tsx
│
├── pages
│   ├── Home.tsx
│   ├── Counter.tsx
│   ├── PropsExample.tsx
│   └── TodoPage.tsx
│
├── todo.ts
├── TodoService.ts
│
├── AppLayout.tsx
├── App.tsx
├── main.tsx
```

---

## 🧠 Demonstrated Concepts

### 1. TypeScript with React

TypeScript improves React applications by adding **static typing**, which helps detect errors during development.

Example:

```
type UserProps = {
  name: string
  age: number
}
```

This ensures the component receives the correct data type.

---

### 2. Counter Example

The counter demonstrates **state management using React hooks**.

```
const [count, setCount] = useState<number>(0)
```

Buttons allow the user to:

- Increase
- Decrease
- Reset the counter

---

### 3. Props Example

Props are used to pass data between components.

```
<UserCard name="Vaishnavi" age={22} />
```

The `UserCard` component receives typed props using TypeScript.

---

### 4. Todo List

The Todo List demonstrates CRUD operations.

Users can:

- Add a new task
- Mark tasks as completed
- Edit tasks
- Delete tasks

All tasks are stored in **localStorage**, so they remain even after refreshing the page.

---

## 🌐 Routing

The project uses **React Router v6 with createBrowserRouter**.

Routes:

| Route      | Page                                  |
| ---------- | ------------------------------------- |
| `/`        | Home (TypeScript + React explanation) |
| `/counter` | Counter demo                          |
| `/props`   | Props example                         |
| `/todos`   | Todo List                             |

Example router setup:

```
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "counter", element: <Counter /> },
      { path: "props", element: <PropsExample /> },
      { path: "todos", element: <TodoPage /> }
    ]
  }
])
```

---

## 🛠 Technologies Used

- React
- TypeScript
- React Router
- Tailwind CSS
- React Icons
- LocalStorage API

---

## ▶️ Installation

Clone the repository:

```
git clone https://github.com/your-username/react-ts-demo.git
```

Navigate to the project folder:

```
cd react-ts-demo
```

Install dependencies:

```
npm install
```

Run the development server:

```
npm run dev
```

---

## 📌 Learning Outcomes

By completing this project you will understand:

- How to use **TypeScript with React**
- How to structure a **multi-page React application**
- How to use **typed props and state**
- How to manage **local storage data**
- How to implement **CRUD functionality**
