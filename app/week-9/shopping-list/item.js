export default function Item({ name, quantity, category, onSelect }) {

    return (
        <div className="px-2 bg-amber-200 hover:bg-amber-300 cursor-pointer" onClick={() => onSelect(name)}>
            <p className="text-2xl">{name}</p>
            <p>Buy {quantity} in {category}</p>
        </div>
    )
}
