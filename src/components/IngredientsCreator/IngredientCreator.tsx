import {useState} from "react";
import './IngredientCreator.css'
import type {CreateIngredientsDto} from "../../types/Ingredient.ts";
import {useIngredients} from "../../contexts/IngredientContext.tsx";

export default function IngredientCreator() {
    const [name, setName] = useState("");
    const [calories, setCalories] = useState("");
    const [carbs, setCarbs] = useState("");
    const [fat, setFat] = useState("");
    const [protein, setProtein] = useState("");

    const {ingredients, createIngredient} = useIngredients();

    const createIngredientCallback = async () => {
        if (name === "") {
            console.log("Can't create ingredient with empty name.");
            return;
        }

        if (!ingredients.some(i => i.name.toLowerCase() === name.toLowerCase())) {
            const ingredient: CreateIngredientsDto = {
                name,
                calories: parseInt(calories),
                carbs: parseInt(carbs),
                fat: parseInt(fat),
                protein: parseInt(protein)
            }
            await createIngredient(ingredient);
            console.log(ingredient)
        } else {
            console.log("Ingredient already exists!");
        }
    }

    return (
        <section className="container">
            <div className="form create-ingredient">
                <label className={"form-title"}>Ingredients</label>
                <label>Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name..."/>
                <label>Calories</label>
                <input type="number" value={calories} onChange={(e) => setCalories(e.target.value)}
                       placeholder="Calories..."/>
                <label>Carbs</label>
                <input type="number" value={carbs} onChange={(e) => setCarbs(e.target.value)}
                       placeholder="Carbs..."/>
                <label>Fat</label>
                <input type="number" value={fat} onChange={(e) => setFat(e.target.value)} placeholder="Fat..."/>
                <label>Protein</label>
                <input type="number" value={protein} onChange={(e) => setProtein(e.target.value)}
                       placeholder="Protein..."/>
                <div className={"grow"}></div>
                <button className={"create-ingredient-btn"} onClick={async () => createIngredientCallback()}>
                    Click me to create a new ingredient
                </button>

            </div>
        </section>
    )
}