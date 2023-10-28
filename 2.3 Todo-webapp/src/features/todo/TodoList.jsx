import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

function TodoList() {
  const taskList = useSelector((state) => state.todo.taskList);
  return (
    <div className="todoListContainer">
      <div className="todoListFilter">
        <p>Pending</p>
        <p>Completed</p>
      </div>
      <div className="todoList">
        {taskList.map((task) => (
          <TodoItem todo={task} key={task.id} />
        ))}
      </div>
    </div>
  );
}

export default TodoList;
