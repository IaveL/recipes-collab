import React from "react";
import {
  Line,
  RecipeCardContainer,
  RecipeImg,
  RecipeName,
  RecipeTitle,
  RecipeWrapper,
} from "./RecipesStyle";

export default function RecipeCard(props) {
  return (
    <RecipeCardContainer>
      <RecipeWrapper>
        <RecipeImg src={props.img} alt="" />
        <RecipeName>
          <Line />
          <RecipeTitle>{props.dish}</RecipeTitle>
        </RecipeName>
      </RecipeWrapper>
    </RecipeCardContainer>
  );
}
