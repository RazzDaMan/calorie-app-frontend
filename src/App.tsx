import './App.css'
import {createIngredient, getIngredients} from "./services/userService.ts";
import {useState} from "react";

function App() {
    const [name, setName] = useState("");
    const [calories, setCalories] = useState("");
    const [carbs, setCarbs] = useState("");
    const [fat, setFat] = useState("");
    const [protein, setProtein] = useState("");

    const createIngredientCallback = async () => {
        if (name === "")
            return;
        const result = await createIngredient({
            name,
            calories: parseInt(calories),
            carbs: parseInt(carbs),
            fat: parseInt(fat),
            protein: parseInt(protein)
        })
        console.log(result)
    }

    return (
        <>
            <div className="buttons">
                <button onClick={async () => {
                    const ingredients = await getIngredients();
                    console.log(ingredients);
                }}>
                    Click to get all ingredients
                </button>
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
                    <button onClick={async () => createIngredientCallback()}>
                        Click me to create a new ingredient
                    </button>
                </div>
            </div>
        </>
    )
}

export default App
