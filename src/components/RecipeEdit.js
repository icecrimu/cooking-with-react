import React from "react"
import RecipeIngredientEdit from "./RecipeIngredientEdit"

export default function RecipeEdit() {
  return (
    <div className="recipe-edit">
      <div className="recipe-edit__remove-btn-container">
        <button className="recipe-edit__remove-btn">&times;</button>
      </div>
      <div className="recipe-edit__details-grid">
        <label htmlFor="name" className="recipe-edit__label">
          Name
        </label>
        <input
          type="text"
          className="recipe-edit__input"
          name="name"
          id="name"
        />

        <label htmlFor="cookTime" className="recipe-edit__label">
          Cook Time
        </label>
        <input
          type="text"
          className="recipe-edit__input"
          name="cookTime"
          id="cookTime"
        />

        <label htmlFor="servings" className="recipe-edit__label">
          Servings
        </label>
        <input
          type="number"
          className="recipe-edit__input"
          name="servings"
          min="1"
          id="servings"
        />

        <label htmlFor="instructions" className="recipe-edit__label">
          Instructions
        </label>
        <textarea
          type="text"
          className="recipe-edit__input"
          name="instructions"
          id="instructions"
        />
      </div>
      <br />
      <label className="recipe-edit__label">Ingredients</label>
      <div className="recipe-edit__ingredient-grid">
        <div>Name</div>
        <div>Amount</div>
        <div></div>
        <RecipeIngredientEdit />
        <RecipeIngredientEdit />
      </div>
      <div className="recipe-edit__add-ingredient-btn-container">
        <button className="btn btn--primary">Add Ingredient</button>
      </div>
    </div>
  )
}
