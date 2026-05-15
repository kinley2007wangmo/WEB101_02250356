import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Todo App with Zustand</h1>

      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
