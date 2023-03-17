
const Button = (props) => {
    return (
        <button onClick={props.method} className="button">{props.name}</button>
    )
}

export default Button