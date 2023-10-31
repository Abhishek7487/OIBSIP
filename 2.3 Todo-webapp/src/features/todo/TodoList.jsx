import { useDispatch, useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { filterTodoList } from "./todoSlice";

function TodoList() {
  const dispatch = useDispatch();
  const filteredTodoList = useSelector((state) => state.todo.filteredTodoList);
  const activeList = useSelector((state) => state.todo.activeList);

  return (
    <div className="todoListContainer">
      <div className="todoListFilter">
        <p
          style={
            activeList === "pending"
              ? {
                  backgroundColor: "#5946a6",
                  color: "#fff",
                }
              : {}
          }
          onClick={() => dispatch(filterTodoList("pending"))}
        >
          Pending
        </p>
        <p
          style={
            activeList === "completed"
              ? {
                  backgroundColor: "#5946a6",
                  color: "#fff",
                }
              : {}
          }
          onClick={() => dispatch(filterTodoList("completed"))}
        >
          Completed
        </p>
      </div>
      <div className="todoList">
        {filteredTodoList?.map((todo) => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </div>
    </div>
  );
}

export default TodoList;
