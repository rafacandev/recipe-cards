/**
 * @typedef {{
 *  recipeId: string,
 *  image: string,
 *  name: string,
 *  ingredients: string[],
 *  directions: string[]
 * }} Recipe
 */

/**
 * @type {Recipe[]}
 */
export const recipes = [
  {
    recipeId: "chilli",
    image: "chilli.jpg",
    name: "Chilli",
    ingredients: [
      "1 pound ground beef",
      "1 onion, chopped",
      "1 (15 ounce) can tomato sauce",
      "1 (15 ounce) can kidney beans",
      "1 (14.5 ounce) can stewed tomatoes",
      "1 ½ cups water, or as needed (Optional)",
      "1 teaspoon chili powder, or more to taste",
      "1 pinch garlic powder",
      "salt and pepper to taste",
    ],
    directions: [
      "Place ground beef and onion in a large saucepan over medium heat; cook and stir until meat is browned and onion is tender, about 5 to 7 minutes.",
      "Stir in tomato sauce, kidney beans, and stewed tomatoes with juice. If you prefer a thinner consistency, you can add water. Season with chili powder, garlic powder, salt, and black pepper. Bring to a boil, reduce heat to low, cover and let simmer for 15 minutes.",
    ],
  },
  {
    recipeId: "honey-garlic-chicken",
    image: "honey-garlic-chicken.jpg",
    name: "Honey Garlic Chicken",
    ingredients: [
      "3 pounds boneless skinless chicken thighs",
      "1/4 to 1 teaspoon Sriracha, to taste",
      "1/2 teaspoon dried minced garlic",
      "3/4 cup soy sauce",
      "3/4 cup ketchup",
      "3/4 cup honey",
      "2 tablespoons cornstarch",
      "2 tablespoons water",
      "1 tablespoon freeze dried basil",
      "Cooked rice, for serving",
    ],
    directions: [
      "Add sriracha, garlic, and soy sauce to the Instant Pot. Place chicken in an even layer. Without stirring, pour honey and ketchup over the chicken.",
      "Lock the lid and cook on High Pressure for 9 minutes. Quick release when done. Ensure internal temp of chicken is at least 170°F. Cook a few more minutes if needed.",
      "Optional: remove chicken to slice or shred. Stir together cornstarch and water in a small bowl. Add to pot and stir. Select Sauté and cook until sauce thickens. Stir in basil.",
      "Serve chicken and sauce over rice with fresh veggies if desired.",
    ],
  },
  {
    recipeId: "microwave-rice",
    image: "microwave-rice.jpg",
    name: "Microwave Rice",
    ingredients: ["1 cup of white rice", "2 cups of water"],
    directions: [
      "Place rice and water in a microwave safe container.",
      "Set the microwave to half power and 24 minutes.",
      "You might want to experiment with different power settings and times for the consistency you like.",
    ],
  }, {
    recipeId: "butter-chicken",
    image: "butter-chicken.png",
    name: "Butter Chicken",
    ingredients: [
      "1 tablespoon oil",
      "1 tablespoon butter",
      "1 medium onion, diced",
      "1 teaspoon fresh ginger, finely minced or grated (or use paste)",
      "2-3 cloves garlic, finely minced or crushed",
      "1 1/2 pounds about 2-3 boneless, skinless chicken breasts, cut into chunks",
      "4 tablespoons tomato paste, or 8 oz can of tomato sauce",
      "1 tablespoon garam masala",
      "1 teaspoon chili powder, or paprika, adjust to taste",
      "1 teaspoon Fenugreek, I use powder, but seeds or mustard seeds can be used too, optional*",
      "1 teaspoon cumin",
      "1 tsp salt",
      "1/4 tsp black pepper",
      "1 cup heavy cream, sub for half & half or yogurt for low fat"
    ],
    directions: [
      "Heat a large skillet or medium saucepan over medium-high heat. Add the oil, butter, and onions and cook onions down until lightly golden, about 3-4 minutes. Add ginger and garlic and let cook for 30 seconds, stirring so it doesn’t burn.",
      "Add the chicken, tomato paste, and spices. Cook for 5-6 minutes or until everything is cooked through.",
      "Add the heavy cream and simmer for 8-10 minutes stirring occasionally. Serve over Basmati rice or with naan."
    ]
  }
]
