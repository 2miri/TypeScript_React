import { useState } from "react";
import { initialRecipes } from "../data/initialData";
import Recipe from "./Recipe";

export default function RecipeList() {
  const [recipes, setRecipes] = useState(initialRecipes);

  function handleDelete(id: string) {
    setRecipes((recipes) => recipes.filter((recipe) => recipe.id !== id));
  }

  return (
    <>
      {recipes.map((recipe) => (
        <Recipe key={recipe.id} {...recipe} handleDelete={handleDelete} />
      ))}
    </>
  );
}
