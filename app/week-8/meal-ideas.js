"use client"
import React from "react";
import {useState, useEffect} from "react";

async function fetchMealIdeas(ingredient) {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);

    return response.json();
}

export default function MealIdeas(props) {
    let ingredient = props.ingredient;

    const [meals, setMeals] = useState([]);

    useEffect(() => {if(ingredient !== ''){loadMealIdeas(ingredient)}}, [ingredient]);

    function loadMealIdeas() {
        let data = fetchMealIdeas(ingredient);
        data.then((data) => {if(data.meals !== null){setMeals(data.meals); console.log(data.meals)} else{setMeals([])}});
    }

    return (
        <div className="space-y-2 overflow-y-scroll max-h-96 pt-2">
            {meals.map(meal => (
                <li key={meal} className="list-none">
                    <ul className="bg-amber-200">
                        <h1 className='text-xl'>{meal.strMeal}</h1>
                    </ul>
                </li>
            ))}
        </div>
    )
}
