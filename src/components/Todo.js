function Todo(props) {

  return (
    <div className="card">
      <div>
        <h2>{props.text}</h2> {/* {} allow us to add a JS expression in JSX */}
        {/* This will allow us to pass a value to a key (text=...) in the Todo component */}
      </div>

      <div className="actions">
        <button className="btn">Delete</button>
      </div>
    </div>
  );
}

export default Todo;
