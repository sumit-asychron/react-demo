
const product = (props) => {
    return(
        <div>
        <p>{props.name} - {props.price}</p>
        <span>{props.children}</span>
        </div>
    );
}

export default product;