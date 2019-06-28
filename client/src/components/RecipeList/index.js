import React from "react";
// import Thumbnail from "../Thumbnail";


// Exporting both RecipeList and RecipeListItem from this file

//TODO make class smart component and export
// RecipeList renders a bootstrap list item
export function RecipeList({ children }) {
  return <ul className="list-group">{children}</ul>;
}
