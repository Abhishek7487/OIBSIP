import TodoSidebar from "./TodoSidebar";
import TodoWindow from "./TodoWindow";

function TodoCard() {
  return (
    <div className="todoCard">
      <TodoSidebar />
      <TodoWindow />
    </div>
  );
}

export default TodoCard;
