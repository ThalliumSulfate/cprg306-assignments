'use client'
import {useState} from 'react'
import ItemList from "./item-list";

import itemsJSON from "./items.json";

export default function Page() {
    const [sortBy, setSortBy] = useState('name');

    if(sortBy === 'name') {
        itemsJSON.sort((a, b) => a.name.localeCompare(b.name));
    }
    else if(sortBy === 'category') {
        itemsJSON.sort((a, b) => a.category.localeCompare(b.category));
    }

    return (
        <main className="bg-amber-100 h-dvh">
            <div className="bg-amber-100 h-dvh flex flex-row justify-stretch">
                <div>
                    <h1 className="text-3xl pl-5 pb-5 pt-3">Shopping List</h1>
                    <ItemList items={itemsJSON}/>
                </div>
                <div className="m-2 p-3 flex-1 flex-row">
                    <text>Sort By: </text>
                    <button className={(sortBy === 'name') ? 'm-2 p-2 bg-blue-50 rounded-lg' : 'm-2 p-2 bg-blue-500 rounded-lg'} onClick={() => setSortBy('name')}>Name</button>
                    <button className={(sortBy === 'category') ? 'm-2 p-2 bg-blue-50 rounded-lg' : 'm-2 p-2 bg-blue-500 rounded-lg'} onClick={() => setSortBy('category')}>Category</button>
                </div>
            </div>
        </main>
    );
}
