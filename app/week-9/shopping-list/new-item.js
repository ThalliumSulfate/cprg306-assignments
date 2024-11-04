'use client';
import { useState } from 'react'

export default function NewItem(props) {
    const [quantity, setQuantity] = useState(1);
    const [incDisabled, setIncDisabled] = useState(false);
    const [decDisabled, setDecDisabled] = useState(true);

    const [name, setName] = useState('');
    const [category, setCategory] = useState('produce');

    const increment = () => {
        if(quantity === 1) {
            setDecDisabled(false);
        }

        if(quantity < 20) {
            setQuantity(quantity + 1);

            if(quantity === 19) {
                setIncDisabled(true);
            }
        }
    }
    const decrement = () => {
        if(quantity === 20) {
            setIncDisabled(false);
        }

        if(quantity > 1) {
            setQuantity(quantity - 1);

            if(quantity === 2) {
                setDecDisabled(true);
            }
        }
    }

    return (
        <form className='grid grid-cols-2 gap-2 grid-rows-3 h-44 w-max bg-amber-50 items-center pr-1.5 pl-1.5 pt-2 pb-2' onSubmit={() => props.onAddItem({name, category, quantity})}>
            <input className='w-full h-fit col-span-2 row-start-1 p-3 rounded-lg border' placeholder='Item name' type='text' required value={name} onChange={() => setName(event.target.value)} />
            <view className='flex justify-between flex-row place-items-center bg-white h-full w-fit row-start-2 rounded-lg border'>
                <text className='m-2 pr-5  '>{quantity}</text>
                <div className='text-white m-2 space-x-2'>
                    <button className='bg-blue-400 disabled:bg-blue-200 rounded-lg px-4' onClick={decrement} disabled={decDisabled} type='button'>-</button>
                    <button className='bg-blue-400 disabled:bg-blue-200 rounded-lg px-4' onClick={increment} disabled={incDisabled} type='button'>+</button>
                </div>
            </view>
            <select className='rounded-lg h-full w-fit p-3 justify-self-end' required={true} defaultValue='produce' onChange={(event) => setCategory(event.target.value)}>
                <option disabled={true}>Category</option>
                <option value='produce'>Produce</option>
                <option value='dairy'>Dairy</option>
                <option value='bakery'>Bakery</option>
                <option value='meat'>Meat</option>
                <option value='frozen foods'>Frozen Foods</option>
                <option value='canned goods'>Canned Goods</option>
                <option value='dry goods'>Dry Goods</option>
                <option value='beverages'>Beverages</option>
                <option value='snacks'>Snacks</option>
                <option value='household'>Household</option>
                <option value='other'>Other</option>
            </select>
            <button className='col-span-2 bg-blue-400 w-full h-full rounded-lg text-white' type='submit'>+</button>
        </form>
    );
}
