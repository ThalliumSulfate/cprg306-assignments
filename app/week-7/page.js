'use client'
import {useState} from 'react'
import ItemList from "./item-list";
import NewItem from "./new-item";

import itemsData from "./items.json";

export default function Page() {
    const [sortBy, setSortBy] = useState('');
    const [items, setItems] = useState(itemsData);
    const [categoryEnabled, setCategoryEnabled] = useState(true);
    const [nameEnabled, setNameEnabled] = useState(true);

    function makeId() {
        return (Math.random().toString(36)+'00000000000000000').slice(2, 18);
    }

    function handleSortChange() {
        if(sortBy === 'category') {
            setSortBy('name');
            setItems(items.sort((a, b) => a.name.localeCompare(b.name)));
            setCategoryEnabled(true);
            setNameEnabled(false);
        }
        else if(sortBy === 'name') {
            setSortBy('category');
            setItems(items.sort((a, b) => a.category.localeCompare(b.category)));
            setCategoryEnabled(false);
            setNameEnabled(true);
        }
        else{
            setSortBy('name');
            setItems(items.sort((a, b) => a.name.localeCompare(b.name)));
            setCategoryEnabled(true);
            setNameEnabled(false)
        }
    }

    function handleAddItem(item) {
        event.preventDefault();

        item.id = makeId.toString();
        console.log(item.id + ' ' + item.name + ' ' + item.category + ' ' + item.category);
        setItems([...items, {"id":item.id, "name":item.name, "quantity":item.quantity, "category":item.category}]);
        event.target.reset();
    }

    return (
        <body className='bg-amber-100 w-max h-max'>
            <main className="bg-amber-100 m-2 p-2">
                <h1 className="text-3xl pl-5 pb-5 pt-3 bg-amber-100">Shopping List</h1>
                <div className="bg-amber-100 flex flex-row">
                    <div className="min-h-dvh">
                        <ItemList items={items}/>
                    </div>
                    <div className="flex-1 ml-2">
                        <div className="flex-1 flex-row">
                            <text>Sort By:</text>
                            <button
                                title='name'
                                disabled={!nameEnabled}
                                className='m-2 p-2 bg-blue-500 rounded-lg disabled:bg-blue-200'
                                onClick={handleSortChange}>Name
                            </button>
                            <button
                                title='category'
                                disabled={!categoryEnabled}
                                className='m-2 p-2 bg-blue-500 rounded-lg disabled:bg-blue-200'
                                onClick={handleSortChange}>Category
                            </button>

                        </div>
                        <NewItem onAddItem={handleAddItem}/>
                    </div>

                </div>
            </main>
        </body>

    );
}
