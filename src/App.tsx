import './App.css'
import IngredientCreator from "./components/IngredientsCreator/IngredientCreator.tsx";
import IngredientsWindow from "./components/IngredientsWindow/IngredientsWindow.tsx";
import {IngredientsProvider} from "./contexts/IngredientContext.tsx";
import {SelectedComponentsProvider} from "./contexts/SelectedComponentsContext.tsx";

function App() {
    return (
        <div className="ingredients-section">
            <SelectedComponentsProvider>
                <IngredientsProvider>
                    <div className="ingredients-section">
                        <IngredientsWindow></IngredientsWindow>
                        <IngredientCreator></IngredientCreator>
                    </div>
                </IngredientsProvider>
            </SelectedComponentsProvider>
        </div>
    )
}

export default App