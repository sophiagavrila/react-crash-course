// In order to enable an onClick prop we have to pass it ourselves because it's a custom Component
function Backdrop(props) {

    return <div className="backdrop" onClick={props.onClick} />;
    /**
     * Since div is an HTML component of this component, we can forward 
     * the function we recieve through the Backdrop component's props
     * to the onClick attribute.
     */
}

export default Backdrop;