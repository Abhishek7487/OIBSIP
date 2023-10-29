import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

function TodoList() {
  const todoList = useSelector((state) => state.todo.todoList);

  return (
    <div className="todoListContainer">
      <div className="todoListFilter">
        <p>Pending</p>
        <p>Completed</p>
      </div>
      <div className="todoList">
        {todoList.map(
          (task) =>
            task.status === "pending" && <TodoItem todo={task} key={task.id} />
        )}
      </div>
    </div>
  );
}

export default TodoList;
