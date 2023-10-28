function TodoFilter() {
  return (
    <div className="todoFilter">
      <div className="filterByPriority">
        <img src="/src/assets/filter.svg" alt="filterSvg" />
        <div className="filterPriorities">
          <p>Filter by Priority</p>
          <div className="filterPriority">
            <img src="/src/assets/blob-high.svg" alt="highBlob" />
            <p>High</p>
          </div>
          <div className="filterPriority">
            <img src="/src/assets/blob-mid.svg" alt="midBlob" />
            <p>Medium</p>
          </div>
          <div className="filterPriority">
            <img src="/src/assets/blob-low.svg" alt="lowBlob" />
            <p>Low</p>
          </div>
        </div>
      </div>
      <div className="filterPending">
        <img src="/src/assets/pending.svg" alt="pendingSvg" />
        <p>Pending Tasks</p>
      </div>
      <div className="filterCompleted">
        <img src="/src/assets/tick.svg" alt="tickSvg" />
        <p>Completed Tasks</p>
      </div>
    </div>
  );
}

export default TodoFilter;
