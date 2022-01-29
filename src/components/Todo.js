function Todo(props) {

  /**
   * imperative approach to handling a "click" event on the Delete button would be like so:
   *      document.querySelector('button').addEventListener('click');
   * But in React, we add an extra ATTRIBUTE on the button.
   * Remember that all these HTML elements LOOK like regular HTML elements but are
   * actually React Components with their own attributes like onClick...
   */ 

  // here define the function to pass to the onClick attribute for the delete button
  function deleteHandler() {
    console.log('Clicked!!');
    console.log(props.text);
  }

  return (
    <div className="card">
      <div>
        <h2>{props.text}</h2>
      </div>

      <div className="actions">
        <button className="btn" onClick={deleteHandler}>Delete</button> {/* value of onClick attribute is a dynamic function expression */}
        {/* Keep in mind that we don't call the function with () so as to NOT invoke it when it is examined by JS engine */}
      </div>
    </div>
  );
}

export default Todo;
