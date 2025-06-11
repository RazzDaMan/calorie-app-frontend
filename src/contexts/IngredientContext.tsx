import {createContext, useContext, useEffect, useState} from "react";
import {getIngredients as getIngredientsService,
    createIngredient as createIngredientService,
    deleteIngredient as deleteIngredientService}  from "../services/userService.ts";
import type {CreateIngredientsDto, Ingredient} from "../types/Ingredient.ts";

interface IngredientsContextType {
    ingredients: Ingredient[];
    refreshIngredients: () => Promise<void>;
    createIngredient: (ingredient: Omit<CreateIngredientsDto, "id">) => Promise<void>;
    deleteIngredient: (id: number) => Promise<void>;
}

const IngredientContext = createContext<IngredientsContextType | undefined>(undefined);

export function IngredientsProvider({children}: { children: React.ReactNode }) {
    const [ingredients, setIngredients] = useState<Ingredient[]>([]);

    const refreshIngredients = async () => {
        const fetched = await getIngredientsService();
        setIngredients(fetched);
    }

    const createIngredient = async (ingredient: Omit<CreateIngredientsDto, "id">) => {
        await createIngredientService(ingredient);
        await refreshIngredients();
    };

    const deleteIngredient = async (ingredientId: number) => {
        await deleteIngredientService(ingredientId);
        await refreshIngredients();
    }

    useEffect(() => {
        refreshIngredients();
    }, []);

    return (
        <IngredientContext.Provider value={{ingredients, refreshIngredients, createIngredient, deleteIngredient}}>
            {children}
        </IngredientContext.Provider>
    )
}

export function useIngredients() {
    const context = useContext(IngredientContext);
    if(!context) throw new Error("useIngredients must be used inside IngredientsProvider");
    return context;
}