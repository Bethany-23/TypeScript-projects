import { useState } from "react";
import "./App.css";
import { InputField } from "./components/InputField";
import type { Todo } from "./models";
import TodoList from "./components/TodoList";
import { DndContext } from "@dnd-kit/core";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
    setTodo("");
  };

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (!over) return;

    if (over.id === "completed") {
      // move from active -> completed
      const task = todos.find((t) => t.id.toString() === active.id);
      if (task) {
        setTodos(todos.filter((t) => t.id !== task.id));
        setCompletedTodos([...completedTodos, { ...task, isDone: true }]);
      }
    } else if (over.id === "active") {
      // move from completed -> active
      const task = completedTodos.find((t) => t.id.toString() === active.id);
      if (task) {
        setCompletedTodos(completedTodos.filter((t) => t.id !== task.id));
        setTodos([...todos, { ...task, isDone: false }]);
      }
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="App">
        <span className="heading">TaskIt</span>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodoList
          todos={todos}
          setTodos={setTodos}
          completedTodos={completedTodos}
          setCompletedTodos={setCompletedTodos}
        />
      </div>
    </DndContext>
  );
};

export default App;
