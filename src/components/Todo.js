import Modal from './Modal';
import Backdrop from './Backdrop';

import { useState } from 'react'; 

function Todo(props) {

  const [ modalIsOpen, setModalIsOpen] = useState(false); 

  function deleteHandler() {
    setModalIsOpen(true); 
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div className="card">
      <div>
        <h2>{props.text}</h2>
      </div>

      <div className="actions">
        <button className="btn" onClick={deleteHandler}>Delete</button>
      </div>
    
      {/* Be sure to add the callback function to the onCancel and onConfirm prop after defining them in Modal.js */}
      { modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/> }
      { modalIsOpen && <Backdrop onClick={closeModalHandler} /> }
    </div>
  );
}

export default Todo;
