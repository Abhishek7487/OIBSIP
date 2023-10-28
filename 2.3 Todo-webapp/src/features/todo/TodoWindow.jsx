import CreateTodo from "./CreateTodo";
import TodoList from "./TodoList";

function TodoWindow() {
  return (
    <div className="todoWindow">
      <p className="quote">Quote</p>
      <CreateTodo />
      <TodoList />
    </div>
  );
}

export default TodoWindow;
