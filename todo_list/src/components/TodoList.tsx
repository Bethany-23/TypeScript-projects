import "./styles.css";
import type { Todo } from "../models";
import SingleTodo from "./SingleTodo";
import { useDroppable } from "@dnd-kit/core";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodos: Todo[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({
  todos,
  setTodos,
  completedTodos,
  setCompletedTodos,
}) => {
  const { setNodeRef: activeRef, isOver: isOverActive } = useDroppable({ id: "active" });
  const { setNodeRef: completedRef, isOver: isOverCompleted } = useDroppable({ id: "completed" });

  return (
    <div className="container">
      <div
        className="todos"
        ref={activeRef}
        style={{ backgroundColor: isOverActive ? "#e0ffe0" : "" }}
      >
        <span className="todos__heading">Active Tasks</span>
        {todos.map((todo) => (
          <SingleTodo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
        ))}
      </div>

      <div
        className="todos remove"
        ref={completedRef}
        style={{ backgroundColor: isOverCompleted ? "#ffe0e0" : "" }}
      >
        <span className="todos__heading">Completed Tasks</span>
        {completedTodos.map((todo) => (
          <SingleTodo
            key={todo.id}
            todo={todo}
            todos={completedTodos}
            setTodos={setCompletedTodos}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
