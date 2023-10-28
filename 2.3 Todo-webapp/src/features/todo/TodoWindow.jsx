import { useDispatch, useSelector } from "react-redux";
import CreateTodo from "./CreateTodo";
import TodoList from "./TodoList";
import { useEffect } from "react";
import { setQuote } from "./todoSlice";

function TodoWindow() {
  const dispatch = useDispatch();
  const quote = useSelector((state) => state.todo.quote);

  useEffect(
    function () {
      async function fetchQuote() {
        const res = await fetch(
          "https://api.quotable.io/random?tags=inspirational"
        );
        const data = await res.json();
        dispatch(setQuote(data.content));
      }

      fetchQuote();
    },
    [dispatch]
  );

  console.log(quote);
  return (
    <div className="todoWindow">
      <p className="quote">✨ {quote}</p>
      <CreateTodo />
      <TodoList />
    </div>
  );
}

export default TodoWindow;
