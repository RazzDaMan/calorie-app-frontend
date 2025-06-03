import type {Ingredient, CreateIngredientsDto} from "../types/Ingredient.ts";

const API_URL = import.meta.env.VITE_API_URL;

export const getIngredients = async () => {
    const res = await fetch(`${API_URL}/ingredients`);
    if(!res.ok) throw new Error("Failed to fetch Ingredients");
    const result: Ingredient[] = await res.json();
    return result;
}

export const createIngredient = async (ingredient: CreateIngredientsDto) => {
    const res = await fetch(`${API_URL}/ingredient`, {
        method: "POST",
        body: JSON.stringify(ingredient),
        headers: {"Content-Type": "application/json"}
    });

    if(!res.ok) throw new Error("Failed to create Ingredient");
    const result: Ingredient = await res.json();
    return result;
}