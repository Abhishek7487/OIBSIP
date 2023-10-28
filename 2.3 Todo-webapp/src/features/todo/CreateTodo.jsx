function CreateTodo() {
  return (
    <div className="createTodo">
      <select name="TaskPriority">
        <option disabled selected value="">
          Task Priority
        </option>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
      <input type="text" placeholder="What is your next task?" />
      <img className="saveBtn" src="/src/assets/save.svg" alt="saveSvg" />
    </div>
  );
}

export default CreateTodo;
