import "./styles.css";
import { useRef } from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

export const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="form">
      <form className="input" onSubmit={(e) => {handleAdd(e); inputRef.current?.blur();}}>
        <input
          ref={inputRef}
          type="input"
          className="input__box"
          placeholder="add your task here"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button className="input_submit" type="submit">
          Add Task
        </button>
      </form>
    </div>
  );
};
