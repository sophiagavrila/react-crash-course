import Modal from './Modal';
import Backdrop from './Backdrop';

import { useState } from 'react'; // useState() is a Hook that allows you to have state variables in functional components.
                                  // React hooks are a new way (still being developed) to access the core features of react 
                                  // such as state without having to use classes.
function Todo(props) {

  // useState();  // calling this creates a state that React is aware of
               // you can pass a starting value like useState(false);
               // Think of useState as a variable that is managed for you by React.

  // first = value, second = function that allows you to change that value 
  const [ modalIsOpen, setModalIsOpen] = useState(false); // useState() AWAYS returns an array with two elements
                              // we can store them in 2 different elements
                              // modalIsOpen is the first element returned, and setModalIsOpen is the second.

  // whenever you call the second constant (the function setModalIsOpen), it will
  // re-run the component function and re-evaluate the state + update what's rendered on the screen

  function deleteHandler() {
    // here we want to switch to the state where modal is open so we call second const from useState
    setModalIsOpen(true); // this changes the intial state (useState(false)) to true.
  }
 
  // ...Once useState() has been set to useState(true) by the above handler, we use modalIsOpen to
  // conditionally render the modal nad backdrop in the JSX code. (go to App.hs)

  return (
    <div className="card">
      <div>
        <h2>{props.text}</h2>
      </div>

      <div className="actions">
        <button className="btn" onClick={deleteHandler}>Delete</button>
      </div>
      {/* Below we us e aternary operator to check if modalIsOpen is true or not
          ... if it is, we display the Model component, if not we don't do anything */}
      
      {/* modalIsOpen ? <Modal /> : null */}

      {/* Another way to write the ternary expression is with a double ampersand which will do the same like this: */}
      { modalIsOpen && <Modal /> /* Functional Components are ALWAYS true! */ }
      { modalIsOpen && <Backdrop /> /* do the same fore the backdrop */ }
    </div>
  );
}

export default Todo;
