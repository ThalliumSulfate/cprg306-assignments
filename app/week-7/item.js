export default function Item(props) {
    let name = props.name;
    let quantity = props.quantity;
    let category = props.category;

    return (
        <ul className="px-2 bg-amber-200">
            <li className="text-2xl">{name}</li>
            <li>Buy {quantity} in {category}</li>
        </ul>
    )
}
