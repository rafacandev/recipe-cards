import { useParams } from "@solidjs/router";

export const RecipePage = () => {
  const params = useParams();

  return (
    <div>
      <h1 class="text-4xl">Recipe Page</h1>
      <p>Recipe ID: {params.recipeId}</p>
    </div>
  );
};
