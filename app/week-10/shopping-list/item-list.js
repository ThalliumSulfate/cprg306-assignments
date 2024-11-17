import Item from './item';

export default function ItemList({ items, onItemSelect }) {
    const jsonData = [];

    items.forEach((item) => {jsonData.push(item);});

    return (
        <ul className="space-y-3 w-80">
            {jsonData.map((item) => (
                <li key={item}><Item name={item.name} quantity={item.quantity} category={item.category} onSelect={onItemSelect}/></li>))
            }
        </ul>
    );
}
