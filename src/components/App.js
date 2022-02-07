import React, { useState, useEffect } from "react"
import RecipeList from "./RecipeList"
import RecipeEdit from "./RecipeEdit"
import "../css/app.css"
import { v4 as uuidv4 } from "uuid"

export const RecipeContext = React.createContext()

const LOCAL_STORAGE_KEY = "cookingWithReact.recipes"

function App() {
  const [recipes, setRecipes] = useState(sampleRecipes)

  const [selectedRecipeId, setSelectedRecipeId] = useState()

  const selectedRecipe = recipes.find(recipe => recipe.id === selectedRecipeId)

  useEffect(() => {
    const recipesJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (recipesJSON != null) setRecipes(JSON.parse(recipesJSON))
  }, [])

  useEffect(() => {
    console.log("first set")
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes))
    return () => console.log("last set")
  }, [recipes])

  const recipeContextValue = {
    handleRecipeAdd,
    handleRecipeDelete,
    handleRecipeSelect,
    handleRecipeChange
  }

  function handleRecipeChange(id, recipe) {
    const newRecipes = [...recipes]
    const index = newRecipes.findIndex(r => r.id === id)
    newRecipes[index] = recipe
    setRecipes(newRecipes)
  }

  function handleRecipeSelect(id) {
    setSelectedRecipeId(id)
  }

  function handleRecipeAdd() {
    const newRecipe = {
      id: uuidv4(),
      name: "",
      servings: 1,
      cookTime: "",
      instructions: "",
      ingredients: [{ id: uuidv4(), name: "", amount: "" }]
    }
    setRecipes([...recipes, newRecipe])
    setSelectedRecipeId(newRecipe.id)
  }

  function handleRecipeDelete(id) {
    if (selectedRecipeId != null && selectedRecipeId === id) {
      setSelectedRecipeId(undefined)
    }
    setRecipes(recipes.filter(recipe => recipe.id !== id))
  }

  return (
    <RecipeContext.Provider value={recipeContextValue}>
      <RecipeList recipes={recipes} />
      {selectedRecipe && <RecipeEdit recipe={selectedRecipe} />}
    </RecipeContext.Provider>
  )
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
