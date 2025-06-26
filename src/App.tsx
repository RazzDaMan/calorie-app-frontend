import './App.css'
import IngredientCreator from "./components/IngredientsCreator/IngredientCreator.tsx";
import IngredientsWindow from "./components/IngredientsWindow/IngredientsWindow.tsx";
import {IngredientsProvider} from "./contexts/IngredientContext.tsx";

function App() {
    return (
        <div className="ingredients-section">
            <IngredientsProvider>
                <div className="ingredients-section">
                    <IngredientsWindow></IngredientsWindow>
                    <IngredientCreator></IngredientCreator>
                </div>
            </IngredientsProvider>
        </div>
    )
}

export default App
