function TodoList() {
  return (
    <div className="todoListContainer">
      <div className="todoListFilter">
        <p>Pending</p>
        <p>Completed</p>
      </div>
      <div className="todoList">
        {/* <div className="todo">
          <img src="/src/assets/blob-high.svg" alt="blobHigh" />
          <input type="text" value="Read 15 pages of book" />
          <img className="editBtn" src="/src/assets/edit.svg" alt="editSvg" />
          <img
            className="completeBtn"
            src="/src/assets/tick.svg"
            alt="tickSvg"
          />
        </div> */}
      </div>
    </div>
  );
}

export default TodoList;
