import RecipeList from "./RecipeList"
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
      "1. Put salt on chicken \n2. Put chicken in oven\n 3. Eat chicken"
  },
  {
    id: 2,
    name: "Plain Pork",
    cookTime: "0:30",
    servings: 1,
    instructions: "1. Put salt on pork\n 2. Put pork in oven \n 3. Eat pork"
  }
]

export default App
