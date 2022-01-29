// Our 2nd Component to be featured in App so we don't have to duplicate code
function Todo() {
  // The function must begin with a capital character to differentiate it from standrad HTML elements.

  // c/p this from App.js
  return (
    <div className="card">
      <div>
        <h2>TITLE</h2>
      </div>

      <div className="actions">
        <button className="btn">Delete</button>
      </div>
    </div>
  );
}

// This allows the function to be available outside of this file
export default Todo;
