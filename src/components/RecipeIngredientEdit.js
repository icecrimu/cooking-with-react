import React from "react"

export default function RecipeIngredientEdit({ ingredient }) {
  return (
    <>
      <input
        type="text"
        value={ingredient.name}
        className="recipe-edit__input"
      />
      <input
        type="text"
        value={ingredient.amount}
        className="recipe-edit__input"
      />
      <button className="btn btn--danger">&times;</button>
    </>
  )
}
