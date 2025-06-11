import './App.css'
import IngredientCreator from "./components/IngredientsCreator/IngredientCreator.tsx";
import IngredientsWindow from "./components/IngredientsWindow/IngredientsWindow.tsx";
import {IngredientsProvider} from "./contexts/IngredientContext.tsx";

function App() {
    return (
        <div className="ingredients-section">
            <IngredientsProvider>
                <IngredientsWindow></IngredientsWindow>
                <IngredientCreator></IngredientCreator>
            </IngredientsProvider>
        </div>
    )
}

export default App
