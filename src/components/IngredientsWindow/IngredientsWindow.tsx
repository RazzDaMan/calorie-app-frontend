import './IngredientsWindow.css'
import type {Ingredient} from "../../types/Ingredient.ts";
import {useIngredients} from "../../contexts/IngredientContext.tsx";

export default function IngredientsWindow() {
    const {ingredients, deleteIngredient} = useIngredients();

    return (
        <section className="container">
            <div className="ingredients-window">
                <div className="ingredients-list">
                    {ingredients.length > 0 &&
                        ingredients.map((ingredient: Ingredient, index: number) => (
                                <div key={ingredient.id} className={`ingredient-card${index % 2 === 0 ? '' : ' odd'}`}>
                                    <p className={"ingredient-card-title"}>{ingredient.name}</p>
                                    <div className={"ingredient-card-properties"}>
                                        <p className={"ingredient-card-prop"}>Cals: {ingredient.calories}</p>
                                        <p className={"ingredient-card-prop"}>Carbs: {ingredient.carbs}</p>
                                        <p className={"ingredient-card-prop fat"}>Fat: {ingredient.fat}</p>
                                        <p className={"ingredient-card-prop"}>Prot: {ingredient.protein}</p>
                                        <p className={"add-ingredient"}>+</p>
                                        <p className={"delete-ingredient"} onClick={() => deleteIngredient(ingredient.id)}>
                                            x
                                        </p>
                                    </div>
                                </div>
                            )
                        )}
                </div>
            </div>
        </section>
    )
}