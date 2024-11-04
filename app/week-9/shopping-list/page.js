'use client'
import {useState} from 'react'
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";

import itemsData from "./items.json";
import {useUserAuth} from "@/app/week-9/_utils/auth-context";

export default function Page() {
    const {user} = useUserAuth();
    const [sortBy, setSortBy] = useState('');
    const [items, setItems] = useState(itemsData);
    const [categoryEnabled, setCategoryEnabled] = useState(true);
    const [nameEnabled, setNameEnabled] = useState(true);
    const [selectedItemName, setSelectedItemName] = useState('');

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

    function handleItemSelect(itemName) {
        let finishedStr = itemName.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
        finishedStr = finishedStr.trim();
        finishedStr = finishedStr.split(",")[0];

        setSelectedItemName(finishedStr);
    }

    if(user != null) {
        return (
            <main className="bg-amber-100 p-4">
                <h1 className="text-3xl pl-5 pb-5 pt-3 bg-amber-100">Shopping List</h1>
                <div className="bg-amber-100 flex flex-row">
                    <div className="min-h-dvh p">
                        <div className="pb-2 pt-2">
                            <NewItem onAddItem={handleAddItem}/>
                        </div>
                        <ItemList items={items} onItemSelect={handleItemSelect}/>
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
                            <h1 className="text-2xl">Meal Ideas</h1>
                            <MealIdeas ingredient={selectedItemName}/>
                        </div>
                    </div>

                </div>
            </main>
        );
    }
    else {
        return (
            <main className="bg-amber-100 p-4 h-dvh">
                <p>
                    Must be logged in to access shopping list
                </p>
            </main>
        );
    }
}
