import type {Ingredient} from "./Ingredient.ts";

export interface DishComponent {
    ingredient: Ingredient,
    amount: number;
}