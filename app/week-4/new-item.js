'use client';
import { useState } from 'react'

export default function NewItem() {
    const [quantity, setQuantity] = useState(1);
    const [incDisabled, setIncDisabled] = useState(false);
    const [decDisabled, setDecDisabled] = useState(true);

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
        <view className='flex justify-between flex-row place-items-center m-4 bg-white w-36 h-10'>
            <text className='m-2'>{quantity}</text>
            <div className='text-white m-2 space-x-2'>
                <button className='bg-blue-400 disabled:bg-blue-200 rounded-lg px-4' onClick={decrement} disabled={decDisabled}>-</button>
                <button className='bg-blue-400 disabled:bg-blue-200 rounded-lg px-4' onClick={increment} disabled={incDisabled}>+</button>
            </div>
        </view>
    );
}
