import { useState } from "react";
import "./App.css";
import { Input } from "./components/Input";
import { TodoList } from "./components/TodoList";

export type Todos = {
  task: string,
  id: number,
  isEditing: boolean,
  isCompleted: boolean
};
const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todos[]>([]);

  const addTodos = () => {
    if (todo) {
      setTodos([
        ...todos,
        { task: todo, id: todos.length + 1, isEditing: false, isCompleted: false },
      ]);
      setTodo("");
    }
  };
  const deleteTodos = (id: number) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  const editTodos = (id: number) => {
    setTodos(
      todos.map((item) =>
        item.id === id ? { ...item, isEditing: true } : item
      )
    );
  };
  const editTask = (id: number, task: string) => {
    setTodos(
      todos.map((item) =>
        item.id === id ? { ...item, task, isEditing: false } : item
      )
    );
  };

  const completedTask = (id: number) => {
setTodos(todos.map(item => item.id === id ? {...item, isCompleted: !item.isCompleted} : item))
  }

  console.log(todos);
  return (
      <div className="container my-5">
      <div className="bg-slate-300 text-center py-10">
      <h1 className="text-[3rem] font-serif	italic text-slate-600 mb-2">Todo App</h1>
        <Input todo={todo} setTodo={setTodo} addTodos={addTodos} />
        <hr />
        <TodoList
          todos={todos}
          deleteTodos={deleteTodos}
          editTodos={editTodos}
          setTodo={setTodo}
          editTask={editTask}
          completedTask = {completedTask}
        />
      </div>
    </div>
  );
};

export default App;
