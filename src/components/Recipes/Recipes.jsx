import React from 'react'
import { RecipesContainer, Latest, LineLatest } from './RecipesStyle'
import RecipeCard from './RecipeCard'
import RedVelvet from "../../assets/Cake.png"
import Pizza from "../../assets/Pizza.png"
import Smoothie from "../../assets/Smoothie.png"
export default function Recipes() {
    
  return (
<>
  <Latest>Latest Recipes</Latest>
  <LineLatest/>
    <RecipesContainer>
      <RecipeCard 
          img={RedVelvet}
          dish="Red Velvet Cake"
          />
        <RecipeCard 
          img={Pizza}
          dish="Margherita Pizza"
          />
        <RecipeCard 
          img={Smoothie}
          dish="Peanut Smoothie"
          />
    </RecipesContainer>
    </>
  )
}
