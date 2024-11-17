'use client'
import {useState, useEffect} from 'react'
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import {getItems, addItem} from "../_services/shopping-list-service"

import {useUserAuth} from "../_utils/auth-context";

export default function Page() {
    const {user} = useUserAuth();
    const [sortBy, setSortBy] = useState('');
    const [items, setItems] = useState([]);
    const [categoryEnabled, setCategoryEnabled] = useState(true);
    const [nameEnabled, setNameEnabled] = useState(true);
    const [selectedItemName, setSelectedItemName] = useState('');

    useEffect(() => {
        if(user != null) {
            loadItems().then((value) => setItems([...value]));
        }
    }, [loadItems, user]);

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

    function handleAddItem({name, category, quantity}) {
        addItem(user.uid, name, quantity, category).then((value) => setItems([...items, {id: value, name: name, category: category, quantity: quantity}]));
    }

    function handleItemSelect(itemName) {
    let finishedStr = itemName.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
    finishedStr = finishedStr.trim();
    finishedStr = finishedStr.split(",")[0];

    setSelectedItemName(finishedStr);
}

    async function loadItems() {
        return await getItems(user.uid);
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
                            <p>Sort By:</p>
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
