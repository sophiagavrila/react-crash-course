// (1) add Modal Component to appear when we click button 
function Modal() { // we're not using props right now so we're ommiting is

    return(
        <div className="modal">
            <p>Are you sure</p>
            <button className="btn btn--alt">Cancel</button>
            <button className="btn">Confirm</button>
        </div>
    )

}

export default Modal;