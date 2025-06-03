export interface Ingredient {
    id: number;
    name: string;
    calories: number;
    carbs: number;
    fat: number;
    protein: number;
}

export interface CreateIngredientsDto {
    name: string;
    calories: number;
    carbs: number;
    fat: number;
    protein: number;
}