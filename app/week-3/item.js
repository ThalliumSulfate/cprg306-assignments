function Item(props) {
    return (
        <ul className="px-2 bg-blue-200">
            <li className="text-2xl">{props.name}</li>
            <li>Buy {props.quantity} in {props.category}</li>
        </ul>
    )
}

export default Item;
