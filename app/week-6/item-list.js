import Item from './item';

export default function ItemList(props) {
    const jsonData = [];

    props.items.forEach((item) => {jsonData.push(item);});

    return (
        <ul className="space-y-3 w-80">
            {jsonData.map((item) => (
                <li key={item}><Item name={item.name} quantity={item.quantity} category={item.category}/></li>))
            }
        </ul>
    );
}
