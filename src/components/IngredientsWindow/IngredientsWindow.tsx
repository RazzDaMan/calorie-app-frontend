import './IngredientsWindow.css'
import type {Ingredient} from "../../types/Ingredient.ts";
import {useIngredients} from "../../contexts/IngredientContext.tsx";
import {useEffect, useState} from "react";

export default function IngredientsWindow() {
    const {ingredients, deleteIngredient} = useIngredients();
    const [serverOnline, setServerOnline] = useState("checking");

    useEffect(() => {
        const checkServer = async () => {
            try {
                const API_URL = import.meta.env.VITE_API_URL;
                const response = await fetch(`${API_URL}/`);

                if (!response.ok) {
                    setServerOnline("offline");
                    return false;
                }

                setServerOnline("online");
                return true;
            } catch (e) {
                console.error("Server is offline: ", e);
                setServerOnline("offline");
                return false;
            }
        };
        checkServer();
    }, [])

    function renderIngredientCard(ingredient: Ingredient, index: number) {
        return (
            <div key={ingredient.id} className={`ingredient-card${index % 2 === 0 ? '' : ' odd'}`}>
                <p className={"ingredient-card-title"}>{ingredient.name}</p>
                <div className={"ingredient-card-properties"}>
                    <p className={"ingredient-card-prop"}>Cals: {ingredient.calories}</p>
                    <p className={"ingredient-card-prop"}>Carbs: {ingredient.carbs}</p>
                    <p className={"ingredient-card-prop fat"}>Fat: {ingredient.fat}</p>
                    <p className={"ingredient-card-prop"}>Prot: {ingredient.protein}</p>
                    <div className={"ingredient-card-btns"}>
                        <p className={"add-ingredient"}>+</p>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                             className={"delete-ingredient"}
                             onClick={() => deleteIngredient(ingredient.id)}>
                            <path
                                d="M18 6L17.1991 18.0129C17.129 19.065 17.0939 19.5911 16.8667 19.99C16.6666 20.3412 16.3648 20.6235 16.0011 20.7998C15.588 21 15.0607 21 14.0062 21H9.99377C8.93927 21 8.41202 21 7.99889 20.7998C7.63517 20.6235 7.33339 20.3412 7.13332 19.99C6.90607 19.5911 6.871 19.065 6.80086 18.0129L6 6M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M14 10V17M10 10V17"
                                stroke="currentcolor" strokeWidth="2" strokeLinecap="round"
                                strokeLinejoin="round"/>
                        </svg>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <section className="container">
            <div className="ingredients-window">
                <h2 className={"ingredients-window-title"}>Ingredienter</h2>
                <div className="ingredients-list">
                    {serverOnline === "online" ? (
                        ingredients.map((ingredient: Ingredient, index: number) => renderIngredientCard(ingredient, index))
                    ) : (serverOnline === "offline" ? <p>Server is offline</p> : <p>Checking Server</p>)}
                </div>
            </div>
        </section>
    )
}