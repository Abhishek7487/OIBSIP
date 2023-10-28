import TodoFilter from "./TodoFilter";
import TodoUser from "./TodoUser";

function TodoSidebar() {
  return (
    <div className="todoSidebar">
      <TodoUser />
      <TodoFilter />
    </div>
  );
}

export default TodoSidebar;
