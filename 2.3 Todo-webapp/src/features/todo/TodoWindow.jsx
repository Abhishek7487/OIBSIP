import CreateTodo from "./CreateTodo";
import TodoList from "./TodoList";

function TodoWindow() {
  return (
    <div className="todoWindow">
      <p className="quote">Quality is not an act; it is a habit.</p>
      <CreateTodo />
      <TodoList />
    </div>
  );
}

export default TodoWindow;
