import React from 'react'
import "./RecipeComponent.css"

const RecipeComponent = ({recipe}) => {
    return (
        <div className="recipe-comp">
            <img className="recipe-img" src={recipe["recipe"]["image"]} alt="" />
            <p className="recipe-name">{recipe["recipe"]["label"]}</p>
        </div>
    )
}

export default RecipeComponent
