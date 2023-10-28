import { useState } from "react";
import { addTodo } from "./todoSlice";
import { useDispatch, useSelector } from "react-redux";

function CreateTodo() {
  const dispatch = useDispatch();
  const [priority, setPriority] = useState("high");
  const [task, setTask] = useState("");

  function handleAddTodo() {
    const todo = { priority, task };
    dispatch(addTodo(todo));
    setPriority("high");
    setTask("");
  }

  console.log(
    "Added: ",
    useSelector((state) => state.todo.taskList)
  );

  return (
    <div className="createTodo">
      <select
        name="TaskPriority"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option disabled>Task Priority</option>
        <option value="high" selected>
          High
        </option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
      <input
        type="text"
        placeholder="What is your next task?"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <img
        className="saveBtn"
        src="/src/assets/save.svg"
        alt="saveSvg"
        onClick={handleAddTodo}
      />
    </div>
  );
}

export default CreateTodo;
