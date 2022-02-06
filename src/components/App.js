import RecipeList from "./RecipeList"
import "../css/app.css"
function App() {
  return <RecipeList recipes={sampleRecipes} />
}

const sampleRecipes = [
  {
    id: 1,
    name: "Plain Chicken",
    cookTime: "1:15",
    servings: 3,
    instructions:
      "1. Put salt on chicken \n2. Put chicken in oven\n3. Eat chicken",
    ingredients: [
      {
        id: 1,
        name: "Chicken",
        amount: "1 kg"
      },
      {
        id: 2,
        name: "Chili",
        amount: "1 Tbs"
      }
    ]
  },
  {
    id: 2,
    name: "Plain Pork",
    cookTime: "0:30",
    servings: 1,
    instructions: "1. Put salt on pork\n2. Put pork in oven \n3. Eat pork",
    ingredients: [
      {
        id: 1,
        name: "Pork",
        amount: "3 kg"
      },
      {
        id: 2,
        name: "Pepper",
        amount: "2 Tbs"
      }
    ]
  }
]

export default App
