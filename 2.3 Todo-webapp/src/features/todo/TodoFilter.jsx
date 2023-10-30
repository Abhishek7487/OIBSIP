import { useDispatch } from "react-redux";
import { filterTodoList } from "./todoSlice";

function TodoFilter() {
  const dispatch = useDispatch();

  return (
    <div className="todoFilter">
      <div className="filterByPriority">
        <img src="/src/assets/filter.svg" alt="filterSvg" />
        <div className="filterPriorities">
          <p>
            Filter Pending Tasks <br /> by Priority
          </p>
          <div className="filterPriority">
            <img src="/src/assets/blob-high.svg" alt="highBlob" />
            <p onClick={() => dispatch(filterTodoList("high"))}>High</p>
          </div>
          <div className="filterPriority">
            <img src="/src/assets/blob-mid.svg" alt="midBlob" />
            <p onClick={() => dispatch(filterTodoList("medium"))}>Medium</p>
          </div>
          <div className="filterPriority">
            <img src="/src/assets/blob-low.svg" alt="lowBlob" />
            <p onClick={() => dispatch(filterTodoList("low"))}>Low</p>
          </div>
        </div>
      </div>
      <div
        className="filterPending"
        onClick={() => dispatch(filterTodoList("pending"))}
      >
        <img src="/src/assets/pending.svg" alt="pendingSvg" />
        <p>Pending Tasks</p>
      </div>
      <div
        className="filterCompleted"
        onClick={() => dispatch(filterTodoList("completed"))}
      >
        <img src="/src/assets/tick.svg" alt="tickSvg" />
        <p>Completed Tasks</p>
      </div>
    </div>
  );
}

export default TodoFilter;
