import { useRef, useState } from "react";
import { completeTodo, editTodo } from "./todoSlice";
import { useDispatch } from "react-redux";

function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const inputRef = useRef();

  const [isEditing, setIsEditing] = useState(false);

  const [editedTask, setEditedTask] = useState(todo.task);

  function handleEditTask() {
    inputRef.current.value = editedTask;
  }

  function handleEditTodo() {
    setIsEditing(false);
    const editedTodo = {
      ...todo,
      task: editedTask,
    };
    dispatch(editTodo(editedTodo));
  }

  function handleCompleteTodo() {
    dispatch(completeTodo(todo.id));
  }

  return (
    <div className="todo">
      {todo.priority === "high" && (
        <img src="/src/assets/blob-high.svg" alt="blobHigh" />
      )}
      {todo.priority === "medium" && (
        <img src="/src/assets/blob-mid.svg" alt="blobMid" />
      )}
      {todo.priority === "low" && (
        <img src="/src/assets/blob-low.svg" alt="blobLow" />
      )}
      <input
        ref={inputRef}
        type="text"
        value={editedTask}
        onChange={(e) => {
          setIsEditing(true);
          setEditedTask(e.target.value);
        }}
        onClick={handleEditTask}
      />
      {isEditing && (
        <img
          className="editBtn"
          src="/src/assets/edit.svg"
          alt="editSvg"
          onClick={handleEditTodo}
        />
      )}
      <img
        className="completeBtn"
        src="/src/assets/tick.svg"
        alt="tickSvg"
        onClick={handleCompleteTodo}
      />
    </div>
  );
}

export default TodoItem;