import {createContext, useContext, useState} from "react";
import type {DishComponent} from "../types/DishComponent.ts";
import type {Ingredient} from "../types/Ingredient.ts";

interface SelectedComponentsContextType {
    selectedComponents: DishComponent[],
    addComponent: (ingredient: Ingredient, amount: number) => void,
    removeComponent: (ingredient: Ingredient) => void
}

const SelectedComponentsContext = createContext<SelectedComponentsContextType | undefined>(undefined);

export function SelectedComponentsProvider({children}: { children: React.ReactNode }) {
    const [selectedComponents, setSelectedComponents] = useState<DishComponent[]>([]);

    const addComponent = (ingredient: Ingredient, amount: number) => {
        const newList = [...selectedComponents, { ingredient, amount }];
        setSelectedComponents(newList);
    }

    const removeComponent = (ingredient: Ingredient) => {
        const newList = selectedComponents.filter((i) => i.ingredient !== ingredient);
        setSelectedComponents(newList);
    }

    return (
        <SelectedComponentsContext.Provider value={{selectedComponents, addComponent, removeComponent}}>
            {children}
        </SelectedComponentsContext.Provider>
    )
}

export function useSelectedComponents() {
    const context = useContext(SelectedComponentsContext);
    if (!context) throw new Error("useSelectedComponents must be used inside a SelectedComponentsProvider");
    return context;
}
