function Modal(props) {

    function cancelHandler() {
        props.onCancel(); // Here we're defining new props as functions to bepassed where we use the Component
    }

    function confirmHandler() {
        props.onConfirm(); // after adding this last prop, go to Todo and pass fwd them
    }

    return(
        <div className="modal">
            <p>Are you sure</p>
            <button className="btn btn--alt" onClick={cancelHandler}>Cancel</button>
            <button className="btn" onClick={confirmHandler}>Confirm</button>
        </div>
    )

}

export default Modal;